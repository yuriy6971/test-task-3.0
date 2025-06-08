import React from "react";
import s from "./Home.module.css";
import Butt_Sign from "../../assets/buttons/Butt_Sign";

const Home = () => {
  return (
    <div className={s.block_test}>
      <div className={s.block_container}>
        <h2 className={s.test_title}>
          Test assignment for front-end developer
        </h2>
             <p className={s.text}>
                What defines a good front-end developer is one that has skilled
                knowledge of HTML, CSS, JS with a vast understanding of User design
                thinking as they'll be building web interfaces with accessibility in
                mind. They should also be excited to learn, as the world of Front-End
                Development keeps evolving.
            </p>

            <div  className={s.sign} >
               <Butt_Sign />
            </div>
      </div>
    </div>
  );
};

export default Home;
