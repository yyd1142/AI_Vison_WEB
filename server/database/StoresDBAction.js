const axios = require('axios');
const domain = 'http://aqfwy.com/api/qy/person';

class StoresDBAction {
  constructor() {
  }

  async getAllStore(id) {
    return await axios.get(`${domain}?m=info&userName=ZWY`).then(response => {
      if (response.data) {
        // return response.data;
        return [
          {
            "id": "101001",
            "titleEN": "TST1",
            "titleZH": "尖沙咀1店",
            "titleCN": "尖沙咀1店"
          },
          {
            "id": "101002",
            "titleEN": "TST2",
            "titleZH": "尖沙咀2店",
            "titleCN": "尖沙咀2店"
          }
        ]
      } else {
        return {};
      }
    }).catch(error => {
      console.log(error);
    });
  }

  async getPeoPleCountByStoreInRegion(id, sid, range, groupby) {
    return await axios.get(`${domain}?m=info&userName=ZWY`).then(response => {
      if (response.data) {
        // return response.data;
        return {
          "id": "101001",
          "titleEN": "TST1",
          "titleZH": "尖沙咀1店",
          "titleCN": "尖沙咀1店",
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

  async getAllPeoPleCountInRegion(id, range, groupby) {
    return await axios.get(`${domain}?m=info&userName=ZWY`).then(response => {
      if (response.data) {
        // return response.data;
        return [
          {
              "id": "101001",
              "titleEN": "TST1",
              "titleZH": "尖沙咀1店",
              "titleCN": "尖沙咀1店",
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
          },
          {
              "id": "101002",
              "titleEN": "TST2",
              "titleZH": "尖沙咀2店",
              "titleCN": "尖沙咀2店",
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

module.exports = StoresDBAction;