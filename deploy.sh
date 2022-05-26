cd $(dirname $0)

npm run build

aws s3 sync ./build s3://kebaiz-counter-app --profile personal