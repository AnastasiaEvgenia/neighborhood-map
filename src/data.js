//Initial data for all locations, taken from Fourthsquare API.

const locationData = [
  	{
  		category: "Candy Store",
  		name: "Choco Caramel",
  		id: "51db1d29498e99e8c8b72d52",
  		location: {
  			"lat": 38.25624246901764,
			  "lng": 21.743134058172167
  		},			  
  		url: "https://api.foursquare.com/v2/venues/51db1d29498e99e8c8b72d52?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Candy Store",
  		name: "Max Perry",
  		id: "51783297498e4f4da5953764",
  		location: {
  			"lat": 38.2464356327469,
			  "lng": 21.733347617877275 
  		},	
  		url: "https://api.foursquare.com/v2/venues/51783297498e4f4da5953764?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Candy Store",
  		name: "Caravel",
  		id: "4f8deee7e4b082e6d37453d7",
  		location: {
  			"lat": 38.246736,
			  "lng": 21.734935
  		},
  		url: "https://api.foursquare.com/v2/venues/4f8deee7e4b082e6d37453d7?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Bar",
  		name: "Notos Jazz Bar",
  		id: "4b7f1776f964a520d31530e3",
  		location: {
  			"lat": 38.24466618169899,
			  "lng": 21.73523789868304
  		},
  		url: "https://api.foursquare.com/v2/venues/4b7f1776f964a520d31530e3?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Bar",
  		name: "Avli by Vouz",
  		id: "53ca4a89498e6f50b8f28a12",
  		location: {
  			"lat": 38.24587809998678,
			  "lng": 21.733195373219534
  		},
  		url: "https://api.foursquare.com/v2/venues/53ca4a89498e6f50b8f28a12?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Bar",
  		name: "Disco Room",
  		id: "4cba2588adcd5481d05921a2",
  		location: {
  			"lat": 38.24714810121881,
			  "lng": 21.732804019095393
  		},
  		url: "https://api.foursquare.com/v2/venues/4cba2588adcd5481d05921a2?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Bar",
  		name: "Bocas",
  		id: "528db51a498e2f95f1cb44bf",
  		location: {
  			"lat": 38.25034349358762,
			  "lng": 21.738620439641824
  		},
  		url: "https://api.foursquare.com/v2/venues/528db51a498e2f95f1cb44bf?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Bar",
  		name: "W seaside",
  		id: "4bc05120f8219c74696db110",
  		location: {
  			"lat": 38.26137804035144,
			  "lng": 21.738806041477805
  		},
  		url: "https://api.foursquare.com/v2/venues/4bc05120f8219c74696db110?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Cafe",
  		name: "Deck",
  		id: "4dfa68098877b30c3987c734",
  		location: {
  			"lat": 38.25596971772376,
			  "lng": 21.737601607278375
  		},
  		url: "https://api.foursquare.com/v2/venues/4dfa68098877b30c3987c734?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Cafe",
  		name: "Cielo",
  		id: "4bf7da6b4a67c928ab3b24cf",
  		location: {
  			"lat": 38.261894593451764,
			  "lng": 21.73886776278611
  		},
  		url: "https://api.foursquare.com/v2/venues/4bf7da6b4a67c928ab3b24cf?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Cafe",
  		name: "Carousello",
  		id: "5197c7b5498e45955857287c",
  		location: {
  			"lat": 38.246352277273274,
			  "lng": 21.73323774763344
  		},
  		url: "https://api.foursquare.com/v2/venues/5197c7b5498e45955857287c?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Cafe",
  		name: "Makina",
  		id: "508d4ec7e4b07f1e63fdba12",
  		location: {
  			"lat": 38.244264,
			  "lng": 21.73571
  		},
  		url: "https://api.foursquare.com/v2/venues/508d4ec7e4b07f1e63fdba12?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Cafe",
  		name: "Coffee Island",
  		id: "564f6a55498e0fc67914a83f",
  		location: {
  			"lat": 38.24924552832318,
			  "lng": 21.73835930200131
  		},
  		url: "https://api.foursquare.com/v2/venues/564f6a55498e0fc67914a83f?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Restaurant",
  		name: "Gonia tou Mpampi",
  		id: "4cf932b0ce1da1cd3e4dcce1",
  		location: {
  			"lat": 38.253739907619554,
			  "lng": 21.742006318251224
  		},
  		url: "https://api.foursquare.com/v2/venues/4cf932b0ce1da1cd3e4dcce1?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Restaurant",
  		name: "Batter Butlers",
  		id: "50d3663ce4b000fcf2effd83",
  		location: {
  			"lat": 38.24627309702052,
			  "lng": 21.732632492648378
  		},
  		url: "https://api.foursquare.com/v2/venues/50d3663ce4b000fcf2effd83?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Restaurant",
  		name: "Colazione",
  		id: "4c12b171a9c220a10f77549d",
  		location: {
  			"lat": 38.24922211617813,
			  "lng": 21.735315330124088
  		},
  		url: "https://api.foursquare.com/v2/venues/4c12b171a9c220a10f77549d?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Restaurant",
  		name: "Noodles AYA",
  		id: "581bb79ade98371fb9fd7235",
  		location: {
  			"lat": 38.24043,
			  "lng": 21.735395
  		},
  		url: "https://api.foursquare.com/v2/venues/581bb79ade98371fb9fd7235?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Restaurant",
  		name: "Aquarela",
  		id: "542c39a5498e0ca4d6ee340e",
  		location: {
  			"lat": 38.244261553247256,
			  "lng": 21.737228453256026
  		},
  		url: "https://api.foursquare.com/v2/venues/542c39a5498e0ca4d6ee340e?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	},
  	{
  		category: "Restaurant",
  		name: "Pizza Porto Rico",
  		id: "4d59b194e092a35dc3cb020c",
  		location: {
  			"lat": 38.26915509815536,
			  "lng": 21.750255172682344
  		},
  		url: "https://api.foursquare.com/v2/venues/4d59b194e092a35dc3cb020c?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180724"
  	}
  ];

export default locationData;