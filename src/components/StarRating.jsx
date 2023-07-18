// import React, {useState} from 'react';
// import PropTypes from "prop-types";
// import {getId} from "../tools";
// import Star from "./Star";
//
// const containerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px'
// }
// const starContainerStyle = {
//     display: 'flex',
//     gap: '2px'
// }
//
//
// StarRating.propTypes={
//     maxRating:PropTypes.string,
//     color:PropTypes.string,
//     size:PropTypes.number,
//     className:PropTypes.string,
//     messages:PropTypes.array,
//     defaultRating:PropTypes.number,
//     setMovieRating:PropTypes.func
// }
//
// const StarRating = ({maxRating=5,color='#fcc419',
//                         size=48,className='',messages=[],
//             defaultRating=1,setMovieRating
// }) => {
//     const [rating, setRating] = useState(defaultRating);
//     const [tempRating, setTempRating] = useState(0);
//
//     function handleRating(rating) {
//         setRating(rating)
//         setMovieRating(rating)
//     }
//
//     const textStyle = {
//         lineHeight: '1',
//         margin: '0',
//         color,
//         fontSize:`${size /1.5}px`
//     }
//
//     return (
//         <div style={containerStyle} className={className}>
//             <div style={starContainerStyle}>
//                 {Array.from({length: maxRating}, (_, i) => (
//                     <Star key={getId}
//                           onRate={() => handleRating(i + 1)}
//                           fill={tempRating ? tempRating>=i+1 : rating >= i + 1}
//                           onHoverIn={()=>setTempRating(i+1)}
//                           onHoverOut={()=>setTempRating(0)}
//                           size={size} color={color}
//                     />
//
//                 ))}
//             </div>
//             <p style={textStyle}>
//                 {messages.length===maxRating ? messages[tempRating? tempRating-1 : rating-1]
//                     : tempRating ||rating || ''}
//             </p>
//
//         </div>
//
//     );
// };
//
// export default StarRating;
