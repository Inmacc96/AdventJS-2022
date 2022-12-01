function wrapping(gifts) {
    const wrappedGifts = gifts.map(gift => {
      const quantityGiftWrap = "*".repeat(gift.length + 2)
      return `${quantityGiftWrap}\n*${gift}*\n${quantityGiftWrap}`
  })
    return wrappedGifts
  }
  