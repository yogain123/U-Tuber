const apiResponse = [
  {
    title: "title",
    description: "description",
    cardTitle: "cardTitle"
  },
  {
    title: "title",
    description: "description",
    cardTitle: "cardTitle"
  },
  {
    title: "title",
    description: "description",
    cardTitle: "cardTitle"
  }
];

export default function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(apiResponse);
    }, 500);
  });
}
