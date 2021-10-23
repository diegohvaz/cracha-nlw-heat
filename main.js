const linkSocialMedia = {
  github: 'diegohvaz',
  facebook: 'diego.gomes.06',
  youtube: 'channel/UCvsFmQ2iMTYQt-N95B8k-Pw',
  instagram: 'diegohvaz',
  twitter: 'diegohvaaz',
  linkedin: 'in/diêgo-vaz-gomes-ba829632'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}` //Template String

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
