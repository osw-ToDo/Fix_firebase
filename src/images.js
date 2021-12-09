import SubmitBtn from '../assets/outline_task_alt_black_24.png';
import UnBox from '../assets/outline_check_box_outline_blank_black_24.png';
import Box from '../assets/outline_check_box_black_24.png';
import Delete from '../assets/outline_delete_forever_black_24.png';
import Edit from '../assets/outline_edit_black_24.png';
import Add from '../assets/add.png';
import Off from '../assets/off.png';
import On from '../assets/on.png';

import check from '../assets/done.png';
import back from '../assets/back.png';
import red from '../assets/red.png';
import yellow from '../assets/yellow.png';
import green from '../assets/green.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import selectedPic1 from '../assets/selectedPic1.png';
import selectedPic2 from '../assets/selectedPic2.png';
import selectedPic3 from '../assets/selectedPic3.png';
import selectedPic4 from '../assets/selectedPic4.png';
import selectedPic5 from '../assets/selectedPic5.png';

import bar from '../assets/TodayBar.png';

export const images = {
    done: check , // 사용 X -> submit으로 통일
    back : back, // 뒤로가기
    redSign :red,
    yellowSign:yellow,
    greenSign:green,
    pic1: pic1,
    pic2:pic2,
    pic3 : pic3,
    pic4 : pic4,
    pic5 : pic5,

    sPic1 : selectedPic1,
    sPic2 : selectedPic2,
    sPic3 : selectedPic3, 
    sPic4 : selectedPic4,
    sPic5 : selectedPic5,

    bar: bar,

    submit: SubmitBtn, // 제출 
    uncompleted: UnBox,
    completed:Box,
    delete: Delete, 
    edit: Edit, // 수정
    add: Add,
    off: Off,
    on: On,    
    
}


