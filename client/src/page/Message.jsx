import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

function Message() {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const me = new Talk.User({
        id: "1",
        name: "Henry Mill",
        email: "henrymill@example.com",
        photoUrl:
          "https://res.cloudinary.com/yilin1234/image/upload/v1683748285/Screenshot_2023-05-10_at_3.50.52_PM_laxz2z.png",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const other = new Talk.User({
        id: "2",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl:
          "https://res.cloudinary.com/yilin1234/image/upload/v1683748459/Screenshot_2023-05-10_at_3.54.10_PM_jn5rvk.png",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const other2 = new Talk.User({
        id: "3",
        name: "Amelia June",
        email: "ameliajune@example.com",
        photoUrl:
          "https://res.cloudinary.com/yilin1234/image/upload/v1683763414/Screenshot_2023-05-10_at_8.03.24_PM_n0iabj.png",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tOv2gsZw",
        me: me,
      });

      const conversationId = Talk.oneOnOneId(me, other2);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(me);
      conversation.setParticipant(other2);

      const chatbox = session.createInbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <div>
      <div
        ref={chatboxEl}
        style={{ width: "90%", margin: "30px", height: "500px" }}
      />
    </div>
  );
}

export default Message;
