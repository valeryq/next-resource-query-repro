import svgrLoader from '@svgr/webpack';
import svgUrlLoader from 'svg-url-loader';

export default function SvgLoader(source) {
  console.log('resourcePath', this.resourcePath);
  console.log('resourceQuery', this.resourceQuery);
  console.log('==========================');

  if (this.resourceQuery === '?url') {
    return svgUrlLoader.call(this, source);
  }

  return svgrLoader.call(this, source);
}
