ls ~/.ssh/
ssh-keygen -R 133.130.122.93
ssh -t -t TaKO8Ki@133.130.122.93 <<EOF
echo success
exit
EOF
