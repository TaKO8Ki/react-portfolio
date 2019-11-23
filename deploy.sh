ssh-keyscan -H 133.130.122.93 >> ~/.ssh/known_hosts
sed -i -e "s#\\\\n#\n#g" ~/.ssh/id_rsa
sed -i -e "s#\\\\n#\n#g" ~/.ssh/id_rsa.pub
ssh -t -t TaKO8Ki@133.130.122.93 -i ~/.ssh/id_rsa <<EOF
echo success
exit
EOF
