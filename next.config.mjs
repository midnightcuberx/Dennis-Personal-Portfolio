import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /*experimental: {
    useCache: true,
  },*/
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
