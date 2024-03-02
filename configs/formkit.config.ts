import { pt } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { createMultiStepPlugin } from '@formkit/addons'
import formKitPersonalizedTheme from '~/configs/formKitTheme'

const config = defaultConfig({
  locales: { pt },
  locale: 'pt-BR',
  config: {
    classes: generateClasses(formKitPersonalizedTheme),
  },
  plugins: [createMultiStepPlugin() as any],
})

export default config
