ssh-keyscan -H 133.130.122.93 >> ~/.ssh/known_hosts
chown -R runner:runner ~/.ssh/
sed -i -e "s#\\\\n#\n#g" ~/.ssh/id_rsa
ssh TaKO8Ki@133.130.122.93 -i ~/.ssh/id_rsa <<EOF
echo success
exit
EOF
