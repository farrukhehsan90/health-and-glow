
import Immutable from "seamless-immutable";
import * as types from "../actions/ActionTypes";

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: "",
  data:  [
    {
      backgroundImage: require("../../images/content-management/1.jpeg"),
      category: "15% off",
      categoryTheme: "dark",
      author: "Anas",
      authorAvatar: require("../../images/avatars/1.jpg"),
      title: "Conduct at an replied removal an amongst",
      body:
        "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      date: "28 February 2019",
    },
    {
      backgroundImage: require("../../images/content-management/2.jpeg"),
      category: "Travel",
      categoryTheme: "info",
      author: "James Jamerson",
      authorAvatar: require("../../images/avatars/2.jpg"),
      title: "Off tears are day blind smile alone had ready",
      body:
        "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../../images/content-management/3.jpeg"),
      category: "Technology",
      categoryTheme: "royal-blue",
      author: "Jimmy Jackson",
      authorAvatar: require("../../images/avatars/2.jpg"),
      title: "Difficult in delivered extensive at direction",
      body:
        "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../../images/content-management/4.jpeg"),
      category: "Business",
      categoryTheme: "warning",
      author: "John James",
      authorAvatar: require("../../images/avatars/3.jpg"),
      title: "It so numerous if he may outlived disposal",
      body:
        "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
      date: "29 February 2019",
    },
  ]
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.BLOG_DATA.REQUEST:
      return Immutable.merge(state, {
        isFetching: true
      });
    case types.BLOG_DATA.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: "",
        data: action.data
      });
    case types.BLOG_DATA.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage
      });
    default:
      return state;
  }
};

