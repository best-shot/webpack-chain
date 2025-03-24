const ChainedMap = require('./ChainedMap');
const ChainedValueMap = require('./ChainedValueMap');

module.exports = class extends ChainedMap {
  constructor(parent) {
    super(parent);

    this.library = new ChainedValueMap(this);
    this.library.extend([
      'amdContainer',
      // 'name',
      'type',
      'export',
      'auxiliaryComment',
      'umdNamedDefine',
    ]);

    this.extend([
      'asyncChunks',
      'auxiliaryComment',
      'charset',
      'chunkFilename',
      'chunkLoadTimeout',
      'chunkLoadingGlobal',
      'chunkLoading',
      'chunkFormat',
      'enabledChunkLoadingTypes',
      'crossOriginLoading',
      'devtoolFallbackModuleFilenameTemplate',
      'devtoolModuleFilenameTemplate',
      'devtoolNamespace',
      'filename',
      'assetModuleFilename',
      'globalObject',
      'uniqueName',
      'hashDigest',
      'hashDigestLength',
      'hashFunction',
      'hashSalt',
      'hotUpdateChunkFilename',
      'hotUpdateGlobal',
      'hotUpdateMainFilename',
      'libraryExport',
      'libraryTarget',
      'importFunctionName',
      'path',
      'pathinfo',
      'publicPath',
      'scriptType',
      'sourceMapFilename',
      'sourcePrefix',
      'strictModuleErrorHandling',
      'strictModuleExceptionHandling',
      'umdNamedDefine',
      'workerChunkLoading',
      'enabledLibraryTypes',
      'environment',
      'compareBeforeEmit',
      'wasmLoading',
      'enabledWasmLoadingTypes',
      'iife',
      'module',
      'clean',
    ]);
  }
};
