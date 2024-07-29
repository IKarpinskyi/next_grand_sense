'use client';
import { FC, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import CustomParagraph from '@/components/shared/CustomParagraph';
import { FaqBlockQuestion } from '@/interfaces/faqBlock';

interface QuestionComponentProps {
    question: FaqBlockQuestion;
}

const QuestionCard: FC<QuestionComponentProps> = ({ question }) => {
    const [open, setOpen] = useState(false);

    const handleButtonClicked = () => {
        setOpen(!open);
    };

    return (
        <div className={'p-5 rounded-2xl bg-[#EAF7F8] flex flex-col'}>
            <div className={'flex flex-row justify-between items-center'}>
                <CustomParagraph className={'text-black'}>
                    {question.question}
                </CustomParagraph>
                <button onClick={handleButtonClicked}>
                    <AddIcon style={{ color: '#29AFB1' }}></AddIcon>
                </button>
            </div>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}>
                    <CustomParagraph className={'mt-5 text-black'}>
                        {question.answer}
                    </CustomParagraph>
                </motion.div>
            )}
        </div>
    );
};

export default QuestionCard;
