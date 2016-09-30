#!/bin/bash

usage="$(basename "$0") [-h] [-e key=value] -- program to build a Docker container,
passing in environment variables, to execute commands on project files.

Available options are:
    -e  Set environment variables.  Each one must be after the '-e' flag
        Available variables to set include:
            AWS_ACCESS_KEY_ID
            AWS_SECRET_KEY
            AWS_BUCKET
            BUILD_NUMBER
        Example usage:
            -e \"BUILD_NUMBER=123\"
    -h  Show this help text
    -u  Set the user to run commands.  Example:  -u jenkins
"

NODE_VERSION=`cat .node-version`

BASEDIR=$(pwd)
IMAGE_NAME="mywsb/black-diamond"

runCommand="/bin/bash pipeline.sh"    # Command to run on Docker container
envParameters=""
autoBuildMode=true
runAsUser=""    # Default user

while [ $# -gt 0 ]
do
    case "$1" in
        -e) envParameters="$envParameters -e \"$2\""; shift;;
        -h) echo "$usage"
            exit;;
        -u) runAsUser="$2"; shift;;
        -*) echo >&2 \
            "INVALID USAGE"
            "$usage"
            exit 1;;
        *)  break;;	# terminate while loop
    esac
    shift
done

userCmd=""
if [ "$runAsUser" != "" ]; then userCmd="-u=${runAsUser}"; fi

# Build docker container with specified Dockerfile using -f param
echo "Building Docker container...."
docker build --build-arg NODE_VERSION=${NODE_VERSION} -f Dockerfile-build -t ${IMAGE_NAME} .
rc=$?; if [[ $rc != 0 ]]; then echo "Error building docker container"; exit $rc; fi


dockerCommand="docker run -v ${BASEDIR}/export:/opt/export $userCmd $envParameters $IMAGE_NAME $runCommand"
echo $dockerCommand     # Show the generated command to the user
eval $dockerCommand
rc=$?; if [[ $rc != 0 ]]; then echo "Error running docker container - Error: ${rc}"; exit $rc; fi


if [ "$autoBuildMode" == true ]; then echo "Cleaning up..."; docker rm $(docker ps -a -f status=exited | grep ${IMAGE_NAME} | awk '{print $1}'); docker images -q --filter "dangling=true" | xargs docker rmi; fi

echo "Docker build and run was successful"
