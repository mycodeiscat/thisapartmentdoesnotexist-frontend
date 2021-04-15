function generate() {
  const url = 'http://18.157.179.252/generate'
  document.querySelector('#spinner').style.visibility = 'visible'
  document.querySelector('#blur-wrapper').classList.add('image-blur-wrapper')
  try {
    fetch(url)
      .then(
        response => response.json()
      ).then(
      pics => {
        const newUrl = pics['image0'] + '?' + new Date().getTime()
        document.querySelector('#imgDisplay').setAttribute('src', newUrl);
        document.querySelector('#spinner').style.visibility = 'hidden'
        document.querySelector('#blur-wrapper').classList.remove('image-blur-wrapper')
      }
    )
  } catch (e) {
  }
}
