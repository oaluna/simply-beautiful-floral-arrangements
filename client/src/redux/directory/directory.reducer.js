const INITIAL_STATE = {
  sections: [
    {
      title: 'All Occasions',
      imageUrl:
        'https://images.pexels.com/photos/3786677/pexels-photo-3786677.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      id: 1,
      linkUrl: 'shop/all-occasions'
    },
    {
      title: 'Home Decor',
      imageUrl:
        'https://images.pexels.com/photos/4185978/pexels-photo-4185978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 2,
      linkUrl: 'shop/home-decor'
    },
    {
      title: 'Wedding',
      imageUrl:
        'https://images.pexels.com/photos/1424810/pexels-photo-1424810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 3,
      linkUrl: 'shop/wedding'
    },
    {
      title: 'Seasonal',
      imageUrl:
        'https://images.pexels.com/photos/226145/pexels-photo-226145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      size: 'large',
      id: 4,
      linkUrl: 'shop/seasonal'
    },
    {
      title: 'Romantic',
      imageUrl:
        'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      size: 'large',
      id: 5,
      linkUrl: 'shop/romantic'
    },
    {
      title: 'Gift Arrangements',
      imageUrl:
        'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      size: 'large',
      id: 6,
      linkUrl: 'shop/gift'
    },
    {
      title: 'Deals',
      imageUrl:
        'https://images.pexels.com/photos/4273432/pexels-photo-4273432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 7,
      linkUrl: 'shop/deals'
    },
    {
      title: 'Premium',
      imageUrl:
        'https://images.pexels.com/photos/4041320/pexels-photo-4041320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 8,
      linkUrl: 'shop/premium'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
