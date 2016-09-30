#!/bin/bash
set -e

echo "Building FrontEnd..."

export DISPLAY=:99
Xvfb :99 -shmem -screen 0 1366x768x16 &

echo "npm test..."
npm test

if [ "$PERFORM_BUILD" == "true" ]; then
echo "npm run build..."
npm run build

echo "compressing build files..."
cd build
for file in $(find . -type f | egrep "\.(css|js|html|xml|json|ico|eot|svg|ttf)$") ; do
  gzip --best $file
  # restore file without .gz suffix
  mv "$file.gz" "$file"
done

echo "compressing myWSB-BDE..."
cd ..
tar czvf /tmp/myWSB-BDE.tar.gz ./build

if [ "$AWS_ACCESS_KEY_ID_BINARIES" != "" ];
then
  echo "Uploading build to binaries bucket"
  export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID_BINARIES}
  export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY_BINARIES}
  aws s3 cp /tmp/myWSB-BDE.tar.gz s3://lifeway-binaries/consumer-platforms/content-platform/myWSB/black-diamond/mywsb.${BUILD_NUMBER}.tar.gz
fi

echo "Creating original-build-number.txt artifact"
echo ${BUILD_NUMBER} > /opt/export/original-build-number.txt

# Change ownership of exports
chown -R ${UID}:${GID} /opt/export
echo "Ownership changed to ${UID}:${GID}"
fi
