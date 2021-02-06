
const jamCalls = {
    getAllJams: () => {
        fetch('http://localhost:3000/jams')
        .then(res => res.json())
        .then(data => {
            return data
      })
    },
    getUsersLikedJams: () => {
        fetch('http://localhost:3000/IMPLEMENT')
        .then(res => res.json())
        .then(data => {
            return data
      })
    },
    postJam: async (newJam) => {
        fetch('http://localhost:3000/jams', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJam)
          })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
      })
    },
    postUser: (newUser) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
          })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
      })
    },
    postFavoriteJam: (newFavoriteJamId, userId) => {
      // update to use firebase id once we have static id working
      fetch('http://localhost:3000/favoritejams', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({jamId: parseInt(newFavoriteJamId), userId: userId})
        })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          return data
    })
  },
};

export default jamCalls;
