ssh -t TaKO8Ki@133.130.122.93 "ssh github actions"
rsync -acvz --delete ./build/ TaKO8Ki@133.130.122.93:/services/react-portfolio/
