import Conversation from './Conversation'

const DUMMY_CONVERSATIONS = [
  {
		id: 1,
		fullName: "John Doe",
		profilePicture: "https://avatar.iran.liara.run/public/boy?username=johndoe",
		emoji: "🎃",
	},
	{
		id: 2,
		fullName: "Jane Doe",
		profilePicture: "https://avatar.iran.liara.run/public/girl?username=janedoe",
		emoji: "👻",
	},
	{
		id: 3,
		fullName: "Alice",
		profilePicture: "https://avatar.iran.liara.run/public/girl?username=alice",
		emoji: "🦇",
	},
	{
		id: 4,
		fullName: "Bob",
		profilePicture: "https://avatar.iran.liara.run/public/boy?username=bob",
		emoji: "🧟‍♂️",
	},
	{
		id: 5,
		fullName: "Charlie",
		profilePicture: "https://avatar.iran.liara.run/public/girl?username=charlie",
		emoji: "🧛",
	},
]

const DUMMY_MESSAGES = [
	{
		id: 1,
		fromMe: false,
		body: "Hello John!",
	},
	{
		id: 2,
		fromMe: true,
		body: "Hi! How's it going?",
	},
	{
		id: 3,
		fromMe: false,
		body: "I'm doing well, thanks for asking. How about you?",
	},
	{
		id: 4,
		fromMe: true,
		body: "I'm good too. Been busy with work.",
	},
	{
		id: 5,
		fromMe: false,
		body: "I can imagine. Have you had any time to relax?",
	},
	{
		id: 6,
		fromMe: true,
		body: "A little bit. I watched a movie last night.",
	},
	{
		id: 7,
		fromMe: false,
		body: "That's great! Which movie did you watch?",
	},
];

const index = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {DUMMY_CONVERSATIONS.map(conversation => (
        <Conversation key={conversation.id} conversation={conversation}/>
      ))}
    </div>
  )
}

export default index