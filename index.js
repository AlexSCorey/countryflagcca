module.exports = function getFlagEmoji (countries) {
  return countries.map(country => String.fromCodePoint(...[...country.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())))
}
