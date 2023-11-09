import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

export default function Chatbotweb() {
  const [chatVisible, setChatVisible] = useState(false);
  const holidayDish = [
    "I think 'Big and Juicy Wagyu Beef Cheeseburger' will be a great choice. A flavorful and delicious Wagyu beef hamburger with a rich, creamy cheese filling will be a satisfying meal for your party",
    "I think 'Fruity Pancake with Orange & Blueberry' will be a great choice. A perfectly cooked piece of salmon, covered in a robust ginger sauce with a hint of fresh lime, will make an excellent dish for your party",
    "I think 'Strawberry Oatmeal Pancake with Honey Syrup' will be a great choice. Will make an excellent dish for your party",
  ];
  const familyDish = [
    "I think 'Barbecue Spicy Sandwiches with Chips' are a great choice for families. The fiery flavors will satisfy both adults and kids alike.",
    "I think 'Fruity Pancake with Orange & Blueberry' is an excellent family-friendly option. The sweet and refreshing taste will delight everyone.",
    "I think 'Chicken Ramen Soup with Mushroom' is a warm and nourishing meal, perfect for families. It's a comforting choice that everyone will enjoy.",
  ];

  const randomFamily = function() {
    var randomF = Math.floor(Math.random() * familyDish.length);
    console.log(randomF);
    return familyDish[randomF];
  };
  const randomHoliday = function() {
    var randomH = Math.floor(Math.random() * holidayDish.length);
    console.log(randomH);
    return holidayDish[randomH];
  };

  const steps = [
    {
      id: "Greet",
      message:
        "Hello! I'm FoodieBot, you can call me 'Foodie'. How can I help you today?",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "May I know your name?",
      trigger: "Waiting1",
    },
    {
      id: "Waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "introduce about the website?",
          label: "introduce about the website?",
          trigger: "website",
        },
        {
          value: "suggest some delicious recipes",
          label: "suggest some delicious recipes",
          trigger: "food2",
        },
      ],
    },
    {
      id: "website",
      message:
        "Foodieland, a culinary haven for food enthusiasts, offers a rich collection of delectable recipes, cooking tips, and a vibrant community.",
      trigger: "website2",
    },
    {
      id: "website2",
      message:
        "Our website was skillfully crafted by a talented development team, including Quốc Dương, Hải Dương, Khang, Thuận, and Xuân. Explore a world of flavors and connect with like-minded food lovers on Foodieland.",
      trigger: "webpage",
    },
    {
      id: "webpage",
      options: [
        {
          value: "where to view recipes?",
          label: "where to view recipes?",
          trigger: "recipes",
        },
        {
          value: "how to contact us?",
          label: "how to contact us",
          trigger: "contact",
        },
        { value: "end Chat", label: "end chat", trigger: "exit" },
      ],
    },
    {
      id: "recipes",
      message:
        "You can find delicious recipes on our 'Recipes' page. Additionally, explore our culinary blog at 'Blog' for more culinary inspiration",
      trigger: "food",
    },
    {
      id: "contact",
      message:
        "Do you want to reach out to us? Feel free to do so via our 'Contact' page. We're here to assist and listen to the Foodieland community.",
      trigger: "contact2",
    },
    {
      id: "contact2",
      options: [
        {
          value: "where to view recipes?",
          label: "where to view recipes?",
          trigger: "recipes",
        },
        { value: "end chat", label: "end chat", trigger: "exit" },
      ],
    },
    {
      id: "food",
      options: [
        {
          value: "suggest some delicious recipes",
          label: "suggest some delicious recipes",
          trigger: "food2",
        },
        { value: "end chat", label: "end chat", trigger: "exit" },
      ],
    },
    {
      id: "food2",
      message:
        "Want to try something new today? I can suggest some delicious recipes for you.",
      trigger: "food3",
    },
    {
      id: "food3",
      options: [
        { value: "family dishes", label: "family dishes", trigger: "family" },
        {
          value: "special occasion or holiday dishes",
          label: "special occasion or holiday dishes",
          trigger: "holiday",
        },
      ],
    },

    {
      id: "family",
      message: randomFamily,
      trigger: "food4",
    },
    {
      id: "holiday",
      message: randomHoliday,
      trigger: "food4",
    },
    {
      id: "food4",
      message:
        "You can check out the detailed recipe of this dish right on our homepage.",
      trigger: "food5",
    },
    {
      id: "food5",
      options: [
        {
          value: "how to contact us",
          label: "how to contact us",
          trigger: "contact",
        },
        { value: "end Chat", label: "end chat", trigger: "exit" },
      ],
    },
    {
      id: "exit",
      message:
        "Thank you for visiting Foodieland and chatting with me. Have a delicious meal!",
      end: true,
    },
  ];

  const handleChatIconClick = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div>
      <img
        id="iconChat"
        src="https://static-00.iconduck.com/assets.00/chat-icon-2048x2048-i7er18st.png"
        alt=""
        className="fixed bottom-[10px] w-[50px] right-0"
        onClick={handleChatIconClick}
      />
      {chatVisible && (
        <Segment id="chat" className="fixed bottom-0 right-[60px] z-[999999]">
          <ChatBot steps={steps} />
        </Segment>
      )}
    </div>
  );
}
