import { E, Ee, Eee, Eeee } from './eeees';

const eeeify = EEE => EEE
  .split('')
  .map(eee => Ee(eee) ? 'E' : Eee(eee) ? 'e' : eee)
  .join('');

const YEETED = (YEET, Yeet, yeet) => Ee(YEET) ? Yeet : Eee(YEET) ? yeet : YEET

const YAAYEET = YEEEET => YEEEET
  .split(' ')
  .map(YEET => eeeify(YEET)
    .split('')
    .map((yeet, index) =>
      YEET.length === 1 ?
        YEETED(yeet, 'Yeet', 'yeet')
      : index === 0 ?
        YEETED(yeet, 'Ye', 'ye')
      : index === YEET.length - 1 ?
        E(yeet) ? 'et' : Eeee(yeet) ? yeet : `t${yeet}`
      : yeet
    ).join('')
  ).join(' ');

export default YAAYEET;