'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/utils/cn';
import { EmojiStyle } from 'emoji-picker-react';
import { REACTION_LIST } from '@/constants/emoji';

interface EmojiPickerProps {
  readonly isOpen?: boolean;
  readonly onClose?: () => void;
  readonly onEmoji?: (emoji: string) => void;
}

const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

const EmojiPicker: FC<EmojiPickerProps> = ({ isOpen, onClose, onEmoji }) => {
  return (
    <div className={cn('!absolute top-12 z-10 opacity-100 transition-opacity ease-in', !isOpen && '!opacity-0')}>
      <Picker
        emojiStyle={EmojiStyle.NATIVE}
        skinTonesDisabled
        reactionsDefaultOpen={true}
        reactions={Object.keys(REACTION_LIST)}
        onReactionClick={(emoji) => {
          onEmoji?.(emoji.emoji);
          onClose?.();
        }}
        onEmojiClick={(emoji) => {
          onEmoji?.(emoji.emoji);
          onClose?.();
        }}
      />
    </div>
  );
};

export default EmojiPicker;
