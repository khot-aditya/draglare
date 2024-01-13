#!/bin/bash

echo "Running deployment script"

# Run lint and check exit status
npm run lint

if [ $? -eq 0 ]; then
    # Lint succeeded, proceed with curl
    # Replace 'hash' with your actual deployment hash
    curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_ghbnoV9p2aV5uCyUpTbu55njE4Mk/3oTQCDg39M
    echo "Deployment script completed"
else
    # Lint failed, display log and exit
    echo "Linting failed. Please check the logs for details."
    exit 1
fi