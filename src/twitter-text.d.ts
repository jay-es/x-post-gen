declare module 'twitter-text' {
  function parseTweet(tweet: string): {
    weightedLength: number
    permillage: number
    valid: boolean
    displayRangeEnd: number
    displayRangeStart: number
    validRangeEnd: number
    validRangeStart: number
  }
}
