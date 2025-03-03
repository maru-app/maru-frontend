'use client';

import 'react-notion-x/src/styles.css';

import { FC } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap;
}

const NotionPageRenderer: FC<NotionPageRendererProps> = ({ recordMap }) => {
  return <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} disableHeader={true} pageTitle="" />;
};

export default NotionPageRenderer;
