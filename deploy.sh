ssh-keyscan -H 133.130.122.93 >> ~/.ssh/known_hosts
ssh TaKO8Ki@133.130.122.93 -i ~/.ssh/id_rsa <<EOF
echo success
exit
EOF
