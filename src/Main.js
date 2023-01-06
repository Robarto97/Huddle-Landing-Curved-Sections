import grow from "./images/illustration-grow-together.svg";
import convos from "./images/illustration-flowing-conversation.svg";
import users from "./images/illustration-your-users.svg";
const Main = () => {
  return (
    <main>
      <ul>
        <li>
          <div className="content">
            <div className="img-wrapper">
              <img src={grow} alt="" />
            </div>
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="img-wrapper">
              <img src={convos} alt="" />
            </div>
            <h2>Flowing Conversations</h2>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="img-wrapper">
              <img src={users} alt="" />
            </div>
            <h2>Your Users</h2>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </li>
      </ul>
      <div className="community">
        <h2>Ready to build your community?</h2>
        <button>Get Started For Free</button>
      </div>
    </main>
  );
};

export default Main;
