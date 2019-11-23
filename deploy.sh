ssh-keyscan -H 133.130.122.93 >> ~/.ssh/known_hosts
ssh -i id_rsa TaKO8Ki@133.130.122.93 <<EOF
echo success
exit
EOF
