const facebookButton = document.getElementById('facebook-button');
const twitterButton = document.getElementById('twitter-button');
const githubButton = document.getElementById('github-button');

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(shareUrl, '_blank');
}

function shareOnTwitter() {
  const text = encodeURIComponent('Check out this website:');
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(shareUrl, '_blank');
}

function shareOngithub() { //no function
  const text = encodeURIComponent('Check out this website:'); //no function
  const url = encodeURIComponent(window.location.href); //no function
  const shareUrl = `https://github.com/intent/github?text=${text}&url=${url}`; //no function
  window.open(shareUrl, '_blank'); //no function
} //no function

facebookButton.addEventListener('click', shareOnFacebook);
twitterButton.addEventListener('click', shareOnTwitter);
githubButton.addEventListener('click', shareOngithub); //no function
