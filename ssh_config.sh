#!/usr/bin/env bash

# .ssh ディレクトリの作成
mkdir -p ~/.ssh

# .ssh/known_hosts への github.com の登録
ssh-keyscan -H ${KNOWN_HOSTS} >> ~/.ssh/known_hosts

# .ssh/config の作成
cp -f ./config ~/.ssh/config

# .ssh/id_rsa の作成
echo ${SSH_KEY} > ~/.ssh/id_rsa
sed -i -e "s#\\\\n#\n#g" ~/.ssh/id_rsa

echo ${SSH_KEY_PUBLIC} > ~/.ssh/id_rsa.pub
sed -i -e "s#\\\\n#\n#g" ~/.ssh

＃ のアクセス制限
chmod 600 ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa.pub
