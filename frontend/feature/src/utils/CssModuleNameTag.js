import TemplateTag from 'common-tags/es/TemplateTag';

export default function cssModuleNameTag(styles) {
  function localClass(key = '') {
    return Object.keys(styles).includes(key) ? styles[key] : key
  }

  return new TemplateTag({
    onSubstitution(substitution) {
      return substitution || ''
    },

    onEndResult(result) {
      return result.split(' ').reduce((result, part) => {
        return result + `${localClass(part)} `
      }, '')
    },
  })
}
