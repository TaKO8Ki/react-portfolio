ssh-keyscan -H 133.130.122.93 >> ~/.ssh/known_hosts
ssh -t -t TaKO8Ki@133.130.122.93 <<EOF
echo success
exit
EOF
