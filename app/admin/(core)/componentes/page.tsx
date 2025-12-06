import type { Metadata } from 'next'

import ComponentsPage from '@admin/pages/components'

import { pageMap } from '@/config/page-map'

const PATHNAME = '/admin/componentes'
const page = pageMap[PATHNAME]

const title = page.title

export const metadata: Metadata = {
  title,
}

export default function Page() {
  return <ComponentsPage />
}
