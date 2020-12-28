const questions = [
    {
      id: "1",
      order: 1,
      question: "What is the value of typeof undefined",
      options: [
        {
          name: "A",
          body: "undefined"
        },
        {
          name: "B",
          body: "NaN"
        },
        {
          name: "C",
          body: "number"
        },
        {
          name: "D",
          body: "string"
        }
      ],
      answer: "A"
    },
    {
      id: "2",
      order: 2,
      question:
        "What is the correct syntax for referring to an external script called 'xxx.js'",
      options: [
        {
          name: "A",
          body: "<script name='xxx.js'>"
        },
        {
          name: "B",
          body: "<script src='xxx.js'>"
        },
        {
          name: "C",
          body: "<script href='xxx.js'>"
        }
      ],
      answer: "B"
    },
    {
      id: "3",
      order: 3,
      question: "The external JavaScript file must contain the <script> tag.",
      options: [
        {
          name: "A",
          body: "True"
        },
        {
          name: "B",
          body: "False"
        }
      ],
      answer: "B"
    },
    {
      id: "4",
      order: 4,
      question: "What is the correct way to write a JavaScript array?",
      options: [
        {
          name: "A",
          body: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        },
        {
          name: "B",
          body: "var colors = ['red', 'green', 'blue']"
        },
        {
          name: "C",
          body: "var colors = (1:'red', 2:'green', 3:'blue')"
        },
        {
          name: "D",
          body: "var colors = 'red', 'green', 'blue'"
        }
      ],
      answer: "B"
    }
  ];
  
  export default questions;