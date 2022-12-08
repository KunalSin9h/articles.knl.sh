import type { ArticleShow } from "../types/Article";
import { cantoBold } from "../lib/fontsCanto";

// export default function ArticlesPrev({
//   listOfArticles,
// }: {
//   listOfArticles: ArticleShow[];
// }): JSX.Element | null {
//   if (listOfArticles.length === 0) {
//     return null;
//   }
//   return (
//     <>
//       <p className={`${cantoBold.className} text-3xl`}>Articles</p>
//       {/*Showing only Recent 5 Articles*/}
//       <div>
//         {
//             listOfArticles.map(function(art: ArticleShow, i: number): JSX.Element | null {
//                 if (i === 5) return null;
//                 return (
//                     <div>

//                     </div>
//                 );
//             });
//         }
//       </div>
//     </>
//   );
// }
