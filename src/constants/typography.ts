const TYPOGRAPHY = {
  h1: {
    title: 'Heading 1',
    description: '26px Medium',
    useCase: 'Extension title',
    className:
      'cv-cv-font-sfProText cv-text-[26px] cv-font-[600] cv-not-italic cv-leading-normal',
  },
  h2: {
    title: 'Heading 2',
    description: '14px Medium',
    useCase: 'Editor Tabs',
    className:
      'cv-font-sfProText cv-text-[14px] cv-font-[500] cv-not-italic cv-leading-normal',
  },
  h3: {
    title: 'Heading 3',
    description: '13px Heavy',
    useCase: 'Title',
    className:
      'cv-font-sfProText cv-text-[13px] cv-font-[800] cv-not-italic cv-leading-normal',
  },
  h4: {
    title: 'Heading 4',
    description: '11px Bold uppercase',
    useCase: 'Sidebar Group, Category, Badge',
    className:
      'cv-font-sfProText cv-text-[11px] cv-font-[700] cv-uppercase cv-not-italic cv-leading-normal',
  },
  h5: {
    title: 'Heading 5',
    description: '11px Medium uppercase',
    useCase: 'Sidebar Title, Panel Tabs',
    className:
      'cv-font-sfProText cv-text-[11px] cv-font-[500] cv-uppercase cv-not-italic cv-leading-normal',
  },
  h6: {
    title: 'Heading 6',
    description: '11px Heavy',
    useCase: 'Debugger list item',
    className:
      'cv-font-sfProText cv-text-[11px] cv-font-[800] cv-not-italic cv-leading-normal',
  },
  'body-1': {
    title: 'Body 1',
    description: '13px Medium',
    useCase: 'Body, Input, Ext Desc',
    className:
      'cv-font-sfProText cv-text-[13px] cv-font-[500] cv-not-italic cv-leading-normal',
  },
  'body-2': {
    title: 'Body 2',
    description: '12px Medium',
    useCase: 'Statusbar, Error validation',
    className:
      'cv-font-sfProText cv-text-[12px] cv-font-[500] cv-not-italic cv-leading-normal',
  },
  'label-1': {
    title: 'Label 1',
    description: '14px Medium',
    useCase: 'Ext publisher id',
    className:
      'cv-font-sfProText cv-text-[14px] cv-font-[500] cv-not-italic cv-leading-[155.137%]',
  },
  'label-2': {
    title: 'Label 2',
    description: '12px Bold',
    useCase: 'Ext Author',
    className:
      'cv-font-sfProText cv-text-[12px] cv-font-[700] cv-not-italic cv-leading-[155.137%]',
  },
  'label-3': {
    title: 'Label 3',
    description: '11px Medium',
    useCase: 'Extension version, meta',
    className:
      'cv-font-sfProText cv-text-[11px] cv-font-[500] cv-not-italic cv-leading-[100%]',
  },
  'label-4': {
    title: 'Label 4',
    description: '9px Bold',
    useCase: 'Search badge',
    className:
      'cv-font-sfProText cv-text-[9px] cv-font-[700] cv-not-italic cv-leading-normal',
  },
  'markdown-h1': {
    title: 'Markdown H1',
    description: '26px Normal',
    useCase: 'Markdown',
    className:
      'cv-font-sfProText cv-text-[26px] cv-font-[600] cv-not-italic cv-leading-normal',
  },
  'markdown-h2': {
    title: 'Markdown H2',
    description: '20px Normal',
    useCase: 'Markdown',
    className:
      'cv-font-sfProText cv-font-[600] cv-not-italic cv-leading-normal',
  },
  'markdown-h3': {
    title: 'Markdown H3',
    description: '15px Normal',
    useCase: 'Markdown',
    className:
      'cv-font-sfProText cv-text-[15px] cv-font-[600] cv-not-italic cv-leading-normal',
  },
  'markdown-h4': {
    title: 'Markdown H4',
    description: '13px Bold',
    useCase: 'Markdown',
    className:
      'cv-font-sfProText cv-text-[13px] cv-font-[800] cv-not-italic cv-leading-normal',
  },
  'markdown-h5': {
    title: 'Markdown H5',
    description: '11px Bold',
    useCase: 'Markdown',
    className:
      'cv-font-sfProText cv-text-[11px] cv-font-[800] cv-not-italic cv-leading-normal',
  },
  'markdown-h6': {
    title: 'Markdown H6',
    description: '9px Bold',
    useCase: 'Markdown',
    className:
      'cv-font-sfProText cv-text-[9px] cv-font-[800] cv-not-italic cv-leading-normal',
  },
  'markdown-paragraph': {
    title: 'Markdown Paragraph',
    description: '13px Normal',
    useCase: 'Markdown',
    className:
      'cv-font-sfProText cv-text-[13px] cv-font-[500] cv-not-italic cv-leading-normal',
  },
  'code-1': {
    title: 'Code 1',
    description: '12px Regular - Menlo',
    useCase: 'Editor',
    className:
      'font-menlo cv-text-[12px] cv-font-[400] cv-not-italic cv-leading-[150%]',
  },
  'code-2': {
    title: 'Code 2',
    description: '12px Bold - Menlo',
    useCase: 'Editor bold text',
    className:
      'font-menlo cv-text-[12px] cv-font-[700] cv-not-italic cv-leading-[151.328%]',
  },
  codicon: {
    title:
      "<i class='codicon codicon-add'></i><i class='codicon codicon-archive'></i><i class='codicon codicon-arrow-both'></i><i class='codicon codicon-arrow-down'></i><i class='codicon codicon-arrow-left'></i><i class='codicon codicon-arrow-right'></i>",
    description: '16px Codicon',
    useCase: 'VS Code Icons',
    className:
      'cv-text-[16px] cv-font-[400] cv-uppercase cv-not-italic cv-leading-normal',
  },
  seti: {
    title:
      "<i class='seti-icon seti-icon-babel'></i><i class='seti-icon seti-icon-bower'></i><i class='seti-icon seti-icon-c-sharp'></i><i class='seti-icon seti-icon-coffee'></i><i class='seti-icon seti-icon-clojure'></i><i class='seti-icon seti-icon-coldfusion'></i><i class='seti-icon seti-icon-grails'></i>",
    description: '20px Seti',
    useCase: 'Seti File Icons',
    className:
      'cv-text-[20px] cv-font-[400] cv-uppercase cv-not-italic cv-leading-normal',
  },
};

export default TYPOGRAPHY;
