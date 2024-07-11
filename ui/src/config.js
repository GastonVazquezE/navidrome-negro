// These defaults are only used in development mode. When bundled in the app,
// the __APP_CONFIG__ object is dynamically filled by the ServeIndex function,
// in the /server/app/serve_index.go

const listBackgroundImgages = [
  'https://arquivocheznous.org/wl/?id=x3yFqpld77UggdhZU8BzZ8ASLlWnyYq4&path=04_Arautoscheznous_2020-02-01_LS5D3472.jpg&download=1',
  'https://arquivocheznous.org/wl/?id=x3yFqpld77UggdhZU8BzZ8ASLlWnyYq4&path=507592_0653_30062017_AC_5472x3648.JPG&download=1',
  'https://arquivocheznous.org/wl/?id=x3yFqpld77UggdhZU8BzZ8ASLlWnyYq4&path=20230907_IGB_IMG_9604.jpg&download=1',
  'https://arquivocheznous.org/wl/?id=x3yFqpld77UggdhZU8BzZ8ASLlWnyYq4&path=202012121850050098.JPG&download=1',
  'https://arquivocheznous.org/wl/?id=x3yFqpld77UggdhZU8BzZ8ASLlWnyYq4&path=Paxman%2025A%20Gold%20Brass--edi%C3%A7%C3%A3o%20comemorativa-2415.jpg&download=1',
  'https://arquivocheznous.org/wl/?id=x3yFqpld77UggdhZU8BzZ8ASLlWnyYq4&path=SCR_7605.JPG&download=1',
]

const defaultConfig = {
  version: 'dev',
  firstTime: false,
  baseURL: '',
  variousArtistsId: '03b645ef2100dfc42fa9785ea3102295', // See consts.VariousArtistsID in consts.go
  // Login backgrounds from https://unsplash.com/collections/1065384/music-wallpapers
  // login backgrounds randomly from listBackgroundImgages
  loginBackgroundURL:
    listBackgroundImgages[
      Math.floor(Math.random() * listBackgroundImgages.length)
    ],
  maxSidebarPlaylists: 100,
  enableTranscodingConfig: true,
  enableDownloads: true,
  enableFavourites: true,
  losslessFormats: 'FLAC,WAV,ALAC,DSF',
  welcomeMessage: '',
  gaTrackingId: '',
  devActivityPanel: true,
  enableStarRating: true,
  defaultTheme: 'Dark',
  defaultLanguage: '',
  defaultUIVolume: 100,
  enableUserEditing: true,
  enableSharing: true,
  defaultDownloadableShare: true,
  devSidebarPlaylists: true,
  lastFMEnabled: true,
  listenBrainzEnabled: true,
  enableExternalServices: true,
  enableCoverAnimation: true,
  devShowArtistPage: true,
  enableReplayGain: true,
  defaultDownsamplingFormat: 'opus',
  publicBaseUrl: '/share',
}

let config

try {
  const appConfig = JSON.parse(window.__APP_CONFIG__)
  config = {
    ...defaultConfig,
    ...appConfig,
  }
} catch (e) {
  config = defaultConfig
}

export let shareInfo

try {
  shareInfo = JSON.parse(window.__SHARE_INFO__)
} catch (e) {
  shareInfo = null
}

export default config
