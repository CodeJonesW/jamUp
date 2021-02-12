
const jamCalls = {
    getAllJams: async (page = 0) => {
        let response = fetch(`http://localhost:3000/allJams/${page}`)
        .then(res => res.json())
        .then(data => {
            return data
      })
      return response
    },
    postJam: async (newJam) => {
        let response = fetch('http://localhost:3000/jams', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJam)
          })
        .then(res => res.json())
        .then(data => {
            return data
      })
      return response
    },
    getUserByUid: async (uid) => {
      let response = fetch(`http://localhost:3000/users/${uid}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            return data
      })
      return response
    },
    postUser: async (newUser) => {
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
            // console.log(data)
            return data
      })
    },
    postFavoriteJam: (newFavoriteJamId, userId) => {
      // update to use firebase id once we have static id working
      let response = fetch('http://localhost:3000/favoritejams', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({jamId: parseInt(newFavoriteJamId), userId: userId})
        })
      .then(res => res.json())
      .then(data => {
          // console.log(data)
          return data
    })
    return response
  },
      findUserFavoriteJams: async (userId) => {
        // update to use firebase id once we have static id working
        let response = fetch(`http://localhost:3000/favoritejams/${userId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
          })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            return data
      })
      return response
    },
      findUsersWhoFavoritedJam: async (jamId) => {
        // update to use firebase id once we have static id working
        let response = fetch(`http://localhost:3000/usersByFavoritedJam/${jamId}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            return data
      })
      return response
    },
    deleteJamById: async (jamId, userId, pageNumber) => {
      // update to use firebase id once we have static id working
      let response = fetch(`http://localhost:3000/jams/${jamId}/${userId}/${pageNumber}`, {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
        })
      .then(res => res.json())
      .then(data => {
          // console.log(data)
          return data
    })
    return response
    },

};

export default jamCalls;
