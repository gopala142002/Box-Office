import { SearchCard ,SearchImgWrapper} from "../common/SearchCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StarIcon } from "../common/StarIcon";
import { useRef } from "react";
const ActorCard=({name,imgURL,gender,id,country,birthday,deathday,isStarred,onStarMeClick})=>{
    // const summaryStripped=summary?summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''):"No descriptipn";
    const starBtnRef = useRef();
  const handleStarClick=()=>{
    onStarMeClick(id);
    const startBtnEl=starBtnRef.current;
    if(!starBtnRef)
      return;
    if(isStarred){
      startBtnEl.classList.remove('animate');
    }
    else{
      startBtnEl.classList.add('animate');
    }
    console.log(starBtnRef.current);
  }
    return(
        <SearchCard>
            <SearchImgWrapper>
                <img src={imgURL} alt={name}/>
            </SearchImgWrapper>
            {/* !! to convert a variable into boolean */}
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `Comes from ${country}`:'No country known'}</p>
            {!!birthday && <p>Born {birthday}</p>}
            <p>{deathday ? `Died ${deathday}`:'Alive'}</p>
            {/* <p>{summaryStripped}</p> */}
            <div>
                <Link to={`/show/${id}`}>Read more</Link>
                <StarBtn ref={starBtnRef}
          type="button"
          onClick={handleStarClick}><StarIcon active={isStarred} /></StarBtn>
            </div>
        </SearchCard>
    )
};
export default ActorCard;
const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;