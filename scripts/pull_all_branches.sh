#!/bin/bash

# Fetch all remote branches
git fetch --all

# Loop through each remote branch
for branch in $(git branch -r | grep -v '\->'); do
    # Extract the branch name
    branchName=${branch#origin/}
    
    # Checkout the branch locally (create if it doesn't exist)
    git checkout $branchName || git checkout -b $branchName --track $branch
    
    # Pull the latest changes
    git pull origin $branchName
done

# Switch back to the original branch
git checkout -
