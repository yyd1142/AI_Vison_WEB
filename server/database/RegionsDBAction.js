const axios = require('axios');
const domain = 'http://aqfwy.com/api/qy/person';

class RegionsDBAction {
  constructor() {
  }

  async getAllRegions() {
    return await axios.get(`${domain}?m=info&userName=ZWY`).then(response => {
      if (response.data) {
        // return response.data;
        return [
          {
            "id": "101",
            "titleEN": "TST",
            "titleZH": "尖沙咀",
            "titleCN": "尖沙咀"
          },
          {
            "id": "102",
            "titleEN": "MK",
            "titleZH": "旺角",
            "titleCN": "旺角"
          }
        ]
      } else {
        return {};
      }
    }).catch(error => {
      console.log(error);
    });
  }

  async getPeoPleCountById(id, range, groupby) {
    return await axios.get(`${domain}?m=info&userName=ZWY`).then(response => {
      if (response.data) {
        // return response.data;
        return {
          "id": "101",
          "titleEN": "TST",
          "titleZH": "尖沙咀",
          "titleCN": "尖沙咀",
          "peopleCounts": [
            {
              "timestamp": "1536019200",
              "trackCount": {
                "totalEnter": 300,
                "totalExit": 300
              },
              "genderCount": {
                "male": 100,
                "female": 200
              },
              "ageCount": {
                "type1": 100,
                "type2": 200,
                "type3": 0,
                "type4": 0,
                "type5": 0,
                "unknown": 0
              }
            },
            {
              "timestamp": "1535932800",
              "trackCount": {
                "totalEnter": 400,
                "totalExit": 400
              },
              "genderCount": {
                "male": 100,
                "female": 300
              },
              "ageCount": {
                "type1": 100,
                "type2": 200,
                "type3": 100,
                "type4": 0,
                "type5": 0,
                "unknown": 0
              }
            },
            {
              "timestamp": "1535846400",
              "trackCount": {
                "totalEnter": 500,
                "totalExit": 500
              },
              "genderCount": {
                "male": 200,
                "female": 300
              },
              "ageCount": {
                "type1": 100,
                "type2": 200,
                "type3": 100,
                "type4": 50,
                "type5": 0,
                "unknown": 50
              }
            },
            {
              "timestamp": "1535760000",
              "trackCount": {
                "totalEnter": 600,
                "totalExit": 600
              },
              "genderCount": {
                "male": 200,
                "female": 400
              },
              "ageCount": {
                "type1": 100,
                "type2": 200,
                "type3": 100,
                "type4": 100,
                "type5": 50,
                "unknown": 50
              }
            },
            {
              "timestamp": "1535673600",
              "trackCount": {
                "totalEnter": 500,
                "totalExit": 500
              },
              "genderCount": {
                "male": 100,
                "female": 400
              },
              "ageCount": {
                "type1": 100,
                "type2": 200,
                "type3": 0,
                "type4": 100,
                "type5": 100,
                "unknown": 0
              }
            },
            {
              "timestamp": "1535587200",
              "trackCount": {
                "totalEnter": 400,
                "totalExit": 400
              },
              "genderCount": {
                "male": 200,
                "female": 200
              },
              "ageCount": {
                "type1": 100,
                "type2": 200,
                "type3": 100,
                "type4": 0,
                "type5": 0,
                "unknown": 0
              }
            },
            {
              "timestamp": "1535500800",
              "trackCount": {
                "totalEnter": 300,
                "totalExit": 300
              },
              "genderCount": {
                "male": 100,
                "female": 200
              },
              "ageCount": {
                "type1": 100,
                "type2": 200,
                "type3": 0,
                "type4": 0,
                "type5": 0,
                "unknown": 0
              }
            }
          ]
        }
      } else {
        return {};
      }
    }).catch(error => {
      console.log(error);
    });
  }

  async getAllPeoPleCount(range, groupby) {
    return await axios.get(`${domain}?m=info&userName=ZWY`).then(response => {
      if (response.data) {
        // return response.data;
        return [
          {
              "id": "101",
              "titleEN": "TST",
              "titleZH": "尖沙咀",
              "titleCN": "尖沙咀",
              "peopleCounts": [
                  {
                      "timestamp": "1536019200",
                      "trackCount": {
                          "totalEnter": 320,
                          "totalExit": 300
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 200
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 0,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535932800",
                      "trackCount": {
                          "totalEnter": 450,
                          "totalExit": 400
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 300
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535846400",
                      "trackCount": {
                          "totalEnter": 500,
                          "totalExit": 500
                      },
                      "genderCount": {
                          "male": 200,
                          "female": 300
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 50,
                          "type5": 0,
                          "unknown": 50
                      }
                  },
                  {
                      "timestamp": "1535760000",
                      "trackCount": {
                          "totalEnter": 440,
                          "totalExit": 600
                      },
                      "genderCount": {
                          "male": 200,
                          "female": 400
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 100,
                          "type5": 50,
                          "unknown": 50
                      }
                  },
                  {
                      "timestamp": "1535673600",
                      "trackCount": {
                          "totalEnter": 760,
                          "totalExit": 500
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 400
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 0,
                          "type4": 100,
                          "type5": 100,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535587200",
                      "trackCount": {
                          "totalEnter": 340,
                          "totalExit": 400
                      },
                      "genderCount": {
                          "male": 200,
                          "female": 200
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535500800",
                      "trackCount": {
                          "totalEnter": 670,
                          "totalExit": 300
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 200
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 0,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  }
              ]
          },
          {
              "id": "102",
              "titleEN": "MK",
              "titleZH": "旺角",
              "titleCN": "旺角",
              "peopleCounts": [
                  {
                      "timestamp": "1536019200",
                      "trackCount": {
                          "totalEnter": 300,
                          "totalExit": 300
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 200
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 0,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535932800",
                      "trackCount": {
                          "totalEnter": 400,
                          "totalExit": 400
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 300
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535846400",
                      "trackCount": {
                          "totalEnter": 500,
                          "totalExit": 500
                      },
                      "genderCount": {
                          "male": 200,
                          "female": 300
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 50,
                          "type5": 0,
                          "unknown": 50
                      }
                  },
                  {
                      "timestamp": "1535760000",
                      "trackCount": {
                          "totalEnter": 600,
                          "totalExit": 600
                      },
                      "genderCount": {
                          "male": 200,
                          "female": 400
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 100,
                          "type5": 50,
                          "unknown": 50
                      }
                  },
                  {
                      "timestamp": "1535673600",
                      "trackCount": {
                          "totalEnter": 500,
                          "totalExit": 500
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 400
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 0,
                          "type4": 100,
                          "type5": 100,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535587200",
                      "trackCount": {
                          "totalEnter": 400,
                          "totalExit": 400
                      },
                      "genderCount": {
                          "male": 200,
                          "female": 200
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 100,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  },
                  {
                      "timestamp": "1535500800",
                      "trackCount": {
                          "totalEnter": 300,
                          "totalExit": 300
                      },
                      "genderCount": {
                          "male": 100,
                          "female": 200
                      },
                      "ageCount": {
                          "type1": 100,
                          "type2": 200,
                          "type3": 0,
                          "type4": 0,
                          "type5": 0,
                          "unknown": 0
                      }
                  }
              ]
          }
      ]
      } else {
        return {};
      }
    }).catch(error => {
      console.log(error);
    });
  }
}

module.exports = RegionsDBAction;