/**
 * Custom sidebar definitions:
 * - To declare a sidebar element as part of the homepage sidebar, add className: 'homepage-sidebar-item'
 * - To add an icon:
 *   - add the icon in www/docs/src/theme/Icon/<IconName>/index.ts as a React SVG element if it doesn't exist, where `<IconName>` is the camel case name of the icon
 *   - add the mapping to the icon in www/docs/src/theme/Icon/index.js
 *   - add in customProps sidebar_icon: 'icon-name'
 * - To add a group divider add in customProps sidebar_is_group_divider: true and set the label/value to the title that should appear in the divider.
 * - To add a back item, add in customProps:
 *   - sidebar_is_back_link: true
 *   - sidebar_icon: `back-arrow`
 * - To add a sidebar title, add in customProps sidebar_is_title: true
 * - To add a group headline, add in customProps sidebar_is_group_headline: true
 * - To add a coming soon link (with a badge), add in customProps sidebar_is_soon: true
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  homepage: [
    {
      type: "doc",
      id: "homepage",
      label: "Overview",
      customProps: {
        sidebar_icon: "book-open",
      },
      className: "homepage-sidebar-item",
    },
    {
      type: "doc",
      id: "create-medusa-app",
      label: "Create Medusa App",
      customProps: {
        sidebar_icon: "rocket-launch",
      },
      className: "homepage-sidebar-item",
    },
    {
      type: "html",
      value: "Simplamo features",
      customProps: {
        sidebar_is_group_divider: true,
      },
      className: "homepage-sidebar-item",
    },
    {
      type: "ref",
      id: "progress/overview",
      label: "Progress",
      customProps: {
        sidebar_icon: "puzzle",
      },
      className: "homepage-sidebar-item",
    },
    {
      type: "ref",
      id: "development/overview",
      label: "Medusa Development",
      customProps: {
        sidebar_icon: "server-stack",
      },
      className: "homepage-sidebar-item",
    },
    {
      type: "doc",
      id: "admin/quickstart",
      label: "Admin Dashboard",
      customProps: {
        sidebar_icon: "computer-desktop",
      },
      className: "homepage-sidebar-item",
    },
    {
      type: "ref",
      id: "plugins/overview",
      label: "Plugins",
      customProps: {
        sidebar_icon: "squares-plus",
      },
      className: "homepage-sidebar-item",
    },
  ],
  modules: [
    {
      type: "ref",
      id: "homepage",
      label: "Back to home",
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: "back-arrow",
      },
    },
    {
      type: "doc",
      id: "progress/overview",
      label: "Progress",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "puzzle",
      },
    },
    {
      type: "category",
      label: "How-to",
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "doc",
          id: "progress/how-to/create-core-progress",
          label: "Write Core Process",
        },
        {
          type: "doc",
          id: "progress/how-to/print-share-progress",
          label: "Print Process and Share All",
        },
        {
          type: "doc",
          id: "progress/how-to/create-a-progress",
          label: "Create A Progress",
        },
      ],
    },
  ],
  core: [
    {
      type: "ref",
      id: "homepage",
      label: "Back to home",
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: "back-arrow",
      },
    },
    {
      type: "doc",
      id: "development/overview",
      label: "Medusa Development",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "server-stack",
      },
    },
    {
      type: "category",
      label: "Backend Setup",
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "doc",
          id: "development/backend/install",
          label: "Backend Quickstart",
        },
        {
          type: "doc",
          id: "development/backend/prepare-environment",
          label: "Prepare Environment",
        },
        {
          type: "doc",
          id: "development/backend/configurations",
          label: "Configurations",
        },
      ],
    },
    {
      type: "category",
      label: "Architectural Concepts",
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "doc",
          id: "development/fundamentals/architecture-overview",
          label: "Medusa Architecture",
        },
        {
          type: "doc",
          id: "development/fundamentals/dependency-injection",
          label: "Dependency Injection",
        },
        {
          type: "doc",
          id: "development/fundamentals/local-development",
          label: "Local Development",
        },
      ],
    },
    {
      type: "category",
      label: "Basics",
      customProps: {
        sidebar_is_group_headline: true,
      },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Entities",
          items: [
            {
              type: "doc",
              id: "development/entities/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "development/entities/migrations/overview",
              label: "Migrations",
            },
            {
              type: "ref",
              id: "references/entities/classes/Address",
              label: "Entities Reference",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/entities/create",
              label: "Create an Entity",
            },
            {
              type: "doc",
              id: "development/entities/extend-entity",
              label: "Extend an Entity",
            },
            {
              type: "doc",
              id: "development/entities/migrations/create",
              label: "Create a Migration",
            },
            {
              type: "doc",
              id: "development/entities/extend-repository",
              label: "Extend a Repository",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          items: [
            {
              type: "doc",
              id: "development/endpoints/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/endpoints/create",
              label: "Create an Endpoint",
            },
            {
              type: "doc",
              id: "development/endpoints/add-middleware",
              label: "Middlewares",
            },
            {
              type: "doc",
              id: "development/endpoints/example-logged-in-user",
              label: "Example: Logged-In User",
            },
          ],
        },
        {
          type: "category",
          label: "Services",
          items: [
            {
              type: "doc",
              id: "development/services/overview",
              label: "Overview",
            },
            {
              type: "ref",
              id: "references/services/classes/AuthService",
              label: "Services Reference",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/services/create-service",
              label: "Create a Service",
            },
            {
              type: "doc",
              id: "development/services/extend-service",
              label: "Extend a Service",
            },
          ],
        },
        {
          type: "category",
          label: "Modules",
          items: [
            {
              type: "doc",
              id: "development/modules/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/modules/create",
              label: "Create a Module",
            },
            {
              type: "doc",
              id: "development/modules/publish",
              label: "Publish a Module",
            },
          ],
        },
        {
          type: "category",
          label: "Events",
          items: [
            {
              type: "doc",
              id: "development/events/index",
              label: "Overview",
            },
            {
              type: "doc",
              id: "development/events/subscribers",
              label: "Subscribers",
            },
            {
              type: "doc",
              id: "development/events/events-list",
              label: "Events Reference",
            },
            {
              type: "html",
              value: "Available Modules",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/events/modules/redis",
              label: "Redis",
            },
            {
              type: "doc",
              id: "development/events/modules/local",
              label: "Local",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/events/create-module",
              label: "Create an Event Module",
            },
            {
              type: "doc",
              id: "development/events/create-subscriber",
              label: "Create a Subscriber",
            },
          ],
        },
        {
          type: "category",
          label: "Scheduled Jobs",
          items: [
            {
              type: "doc",
              id: "development/scheduled-jobs/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/scheduled-jobs/create",
              label: "Create a Scheduled Job",
            },
          ],
        },
        {
          type: "category",
          label: "Plugins",
          items: [
            {
              type: "doc",
              id: "development/plugins/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/plugins/create",
              label: "Create a Plugin",
            },
            {
              type: "doc",
              id: "development/plugins/publish",
              label: "Publish a Plugin",
            },
          ],
        },
        {
          type: "category",
          label: "Publishable API Keys",
          items: [
            {
              type: "doc",
              id: "development/publishable-api-keys/index",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/publishable-api-keys/admin/manage-publishable-api-keys",
              label: "Admin: Manage Publishable API Keys",
            },
            {
              type: "doc",
              id: "development/publishable-api-keys/storefront/use-in-requests",
              label: "Storefront: Use in Requests",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced Concepts",
      customProps: {
        sidebar_is_group_headline: true,
      },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Cache",
          items: [
            {
              type: "doc",
              id: "development/cache/overview",
              label: "Cache",
            },
            {
              type: "html",
              value: "Available Modules",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/cache/modules/redis",
              label: "Redis",
            },
            {
              type: "doc",
              id: "development/cache/modules/in-memory",
              label: "In-Memory",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/cache/create",
              label: "Create a Cache Module",
            },
          ],
        },
        {
          type: "category",
          label: "Notifications",
          items: [
            {
              type: "doc",
              id: "development/notification/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/notification/create-notification-provider",
              label: "Create a Notification Provider",
            },
          ],
        },
        {
          type: "category",
          label: "File Service",
          items: [
            {
              type: "doc",
              id: "development/file-service/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "link",
              href: "#",
              label: "Create a File Service",
              customProps: {
                sidebar_is_soon: true,
              },
            },
          ],
        },
        {
          type: "category",
          label: "Batch Jobs",
          items: [
            {
              type: "doc",
              id: "development/batch-jobs/index",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/batch-jobs/create",
              label: "Create Batch Job Strategy",
            },
            {
              type: "doc",
              id: "development/batch-jobs/customize-import",
              label: "Customize Import Strategy",
            },
          ],
        },
        {
          type: "category",
          label: "Strategies",
          items: [
            {
              type: "doc",
              id: "development/strategies/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "link",
              href: "#",
              label: "Create a Strategy",
              customProps: {
                sidebar_is_soon: true,
              },
            },
            {
              type: "link",
              href: "#",
              label: "Override a Strategy",
              customProps: {
                sidebar_is_soon: true,
              },
            },
          ],
        },
        {
          type: "category",
          label: "Feature Flags",
          items: [
            {
              type: "doc",
              id: "development/feature-flags/overview",
              label: "Overview",
            },
            {
              type: "html",
              value: "How-to",
              customProps: {
                sidebar_is_group_divider: true,
              },
            },
            {
              type: "doc",
              id: "development/feature-flags/toggle",
              label: "Toggle Feature Flags",
            },
          ],
        },
        {
          type: "doc",
          id: "development/fundamentals/transaction-orchestrator",
          label: "Transaction Orchestrator",
        },
      ],
    },
  ],
  upgradeGuides: [
    {
      type: "ref",
      id: "homepage",
      label: "Back to home",
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: "back-arrow",
      },
    },
    {
      type: "doc",
      id: "upgrade-guides/index",
      label: "Upgrade Guides",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "cog-six-tooth",
      },
    },
    {
      type: "category",
      label: "Backend",
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "autogenerated",
          dirName: "upgrade-guides/medusa-core",
          customProps: {
            reverse: true,
          },
        },
      ],
    },
    {
      type: "category",
      label: "Medusa React",
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "autogenerated",
          dirName: "upgrade-guides/medusa-react",
          customProps: {
            reverse: true,
          },
        },
      ],
    },
    {
      type: "category",
      label: "Admin Dashboard",
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "autogenerated",
          dirName: "upgrade-guides/admin",
          customProps: {
            reverse: true,
          },
        },
      ],
    },
    {
      type: "category",
      label: "Plugins",
      collapsed: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "autogenerated",
          dirName: "upgrade-guides/plugins",
        },
      ],
    },
  ],
  plugins: [
    {
      type: "ref",
      id: "homepage",
      label: "Back to home",
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: "back-arrow",
      },
    },
    {
      type: "doc",
      id: "plugins/overview",
      label: "Plugins",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "squares-plus-solid",
      },
    },
    [
      {
        type: "category",
        label: "Analytics",
        link: {
          type: "doc",
          id: "plugins/analytics/index",
        },
        collapsible: false,
        customProps: {
          sidebar_is_group_headline: true,
        },
        items: [
          {
            type: "doc",
            id: "plugins/analytics/segment",
            label: "Segment",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Segment with the Medusa backend.",
            },
          },
        ],
      },
      {
        type: "category",
        label: "CMS",
        collapsible: false,
        link: {
          type: "doc",
          id: "plugins/cms/index",
        },
        customProps: {
          sidebar_is_group_headline: true,
        },
        items: [
          {
            type: "category",
            label: "Contentful",
            link: {
              type: "doc",
              id: "plugins/cms/contentful/index",
            },
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Contentful with the Medusa backend.",
            },
            items: [
              {
                type: "doc",
                id: "plugins/cms/contentful/customize-contentful",
                label: "Customize Integration",
              },
            ],
          },
          {
            type: "doc",
            id: "plugins/cms/strapi",
            label: "Strapi",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Strapi with the Medusa backend.",
            },
          },
        ],
      },
      {
        type: "category",
        label: "Notifications",
        collapsible: false,
        link: {
          type: "doc",
          id: "plugins/notifications/index",
        },
        customProps: {
          sidebar_is_group_headline: true,
        },
        items: [
          {
            type: "doc",
            id: "plugins/notifications/sendgrid",
            label: "SendGrid",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate SendGrid with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/notifications/mailchimp",
            label: "Mailchimp",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Mailchimp with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/notifications/twilio-sms",
            label: "Twilio SMS",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Twilio SMS with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/notifications/slack",
            label: "Slack",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Slack with the Medusa backend.",
            },
          },
        ],
      },
      {
        type: "category",
        label: "Payment",
        collapsible: false,
        link: {
          type: "doc",
          id: "plugins/payment/index",
        },
        customProps: {
          sidebar_is_group_headline: true,
        },
        items: [
          {
            type: "doc",
            id: "plugins/payment/klarna",
            label: "Klarna",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Klarna with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/payment/paypal",
            label: "PayPal",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate PayPal with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/payment/stripe",
            label: "Stripe",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Stripe with the Medusa backend.",
            },
          },
        ],
      },
      {
        type: "category",
        label: "Search",
        collapsible: false,
        link: {
          type: "doc",
          id: "plugins/search/index",
        },
        customProps: {
          sidebar_is_group_headline: true,
        },
        items: [
          {
            type: "doc",
            id: "plugins/search/algolia",
            label: "Algolia",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Algolia with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/search/meilisearch",
            label: "MeiliSearch",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate MeiliSearch with the Medusa backend.",
            },
          },
        ],
      },
      {
        type: "category",
        label: "File Service",
        collapsible: false,
        link: {
          type: "doc",
          id: "plugins/file-service/index",
        },
        customProps: {
          sidebar_is_group_headline: true,
        },
        items: [
          {
            type: "doc",
            id: "plugins/file-service/minio",
            label: "MinIO",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate MinIO with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/file-service/s3",
            label: "S3",
            customProps: {
              iconName: "bolt-solid",
              description: "Learn how to integrate S3 with the Medusa backend.",
            },
          },
          {
            type: "doc",
            id: "plugins/file-service/spaces",
            label: "Spaces",
            customProps: {
              iconName: "bolt-solid",
              description:
                "Learn how to integrate Spaces with the Medusa backend.",
            },
          },
        ],
      },
    ],
  ],
  userGuideSidebar: [
    {
      type: "doc",
      id: "user-guide",
      label: "Simplamo Updates",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "user",
      },
    },
    {
      type: "category",
      label: "2023 Releases",
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "doc",
          id: "releases/2023/v1.21",
          label: "v1.21",
        },
        {
          type: "doc",
          id: "releases/2023/v1.20",
          label: "v1.20",
        },
        {
          type: "doc",
          id: "releases/2023/v1.19",
          label: "v1.19",
        },
        {
          type: "doc",
          id: "releases/2023/v1.18",
          label: "v1.18",
        },
        // {
        //   type: "doc",
        //   id: "releases/2023/v1.17",
        //   label: "v1.17",
        // }
      ],
    },
    // {
    //   type: "autogenerated",
    //   dirName: "user-guide",
    // },
  ],
  servicesSidebar: [
    {
      type: "ref",
      id: "development/overview",
      label: "Back to Medusa Development",
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: "back-arrow",
      },
    },
    {
      type: "html",
      value: "Services Reference",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "folder-open",
      },
    },
    {
      type: "autogenerated",
      dirName: "references/services/classes",
    },
  ],
  jsClientSidebar: [
    {
      type: "ref",
      id: "homepage",
      label: "Back to home",
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: "back-arrow",
      },
    },
    {
      type: "doc",
      id: "js-client/overview",
      label: "Medusa JS Client",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "javascript",
      },
    },
    {
      type: "doc",
      id: "js-client/overview",
      label: "Medusa JS Client",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "javascript",
      },
    },
    {
      type: "category",
      collapsed: false,
      label: "Resources",
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: "category",
          label: "admin",
          collapsed: true,
          link: {
            type: "doc",
            id: "references/js-client/classes/Admin",
          },
          items: [
            {
              type: "doc",
              id: "references/js-client/classes/AdminAuthResource",
              label: "auth",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminBatchJobsResource",
              label: "batchJobs",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminCollectionsResource",
              label: "collections",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminCurrenciesResource",
              label: "currencies",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminCustomerGroupsResource",
              label: "customerGroups",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminCustomersResource",
              label: "customers",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminDiscountsResource",
              label: "discounts",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminDraftOrdersResource",
              label: "draftOrders",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminGiftCardsResource",
              label: "giftCards",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminInvitesResource",
              label: "invites",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminNotesResource",
              label: "notes",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminNotificationsResource",
              label: "notifications",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminOrdersResource",
              label: "orders",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminOrderEditsResource",
              label: "orderEdits",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminPriceListResource",
              label: "priceLists",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminProductsResource",
              label: "products",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminProductTagsResource",
              label: "productTags",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminProductTypesResource",
              label: "productTypes",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminRegionsResource",
              label: "regions",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminReturnReasonsResource",
              label: "returnReasons",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminReturnsResource",
              label: "returns",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminSalesChannelsResource",
              label: "salesChannels",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminShippingOptionsResource",
              label: "shippingOptions",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminShippingProfilesResource",
              label: "shippingProfiles",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminStoresResource",
              label: "store",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminSwapsResource",
              label: "swaps",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminTaxRatesResource",
              label: "taxRates",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminUploadsResource",
              label: "uploads",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminUsersResource",
              label: "users",
            },
            {
              type: "doc",
              id: "references/js-client/classes/AdminVariantsResource",
              label: "variants",
            },
          ],
        },
        {
          type: "doc",
          id: "references/js-client/classes/AuthResource",
          label: "auth",
        },
        {
          type: "category",
          label: "carts",
          link: {
            type: "doc",
            id: "references/js-client/classes/CartsResource",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "references/js-client/classes/LineItemsResource",
              label: "lineItems",
            },
          ],
        },
        {
          type: "doc",
          id: "references/js-client/classes/CollectionsResource",
          label: "collections",
        },
        {
          type: "category",
          label: "customers",
          collapsed: true,
          link: {
            type: "doc",
            id: "references/js-client/classes/CustomerResource",
          },
          items: [
            {
              type: "doc",
              id: "references/js-client/classes/AddressesResource",
              label: "addresses",
            },
            {
              type: "doc",
              id: "references/js-client/classes/PaymentMethodsResource",
              label: "paymentMethods",
            },
          ],
        },
        {
          type: "doc",
          id: "references/js-client/classes/GiftCardsResource",
          label: "giftCards",
        },
        {
          type: "doc",
          id: "references/js-client/classes/OrdersResource",
          label: "orders",
        },
        {
          type: "doc",
          id: "references/js-client/classes/OrderEditsResource",
          label: "orderEdits",
        },
        {
          type: "doc",
          id: "references/js-client/classes/PaymentMethodsResource",
          label: "paymentMethods",
        },
        {
          type: "category",
          label: "products",
          link: {
            type: "doc",
            id: "references/js-client/classes/ProductsResource",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "references/js-client/classes/ProductVariantsResource",
              label: "variants",
            },
          ],
        },
        {
          type: "doc",
          id: "references/js-client/classes/RegionsResource",
          label: "regions",
        },
        {
          type: "doc",
          id: "references/js-client/classes/ReturnReasonsResource",
          label: "returnReasons",
        },
        {
          type: "doc",
          id: "references/js-client/classes/ReturnsResource",
          label: "returns",
        },
        {
          type: "doc",
          id: "references/js-client/classes/ShippingOptionsResource",
          label: "shippingOptions",
        },
        {
          type: "doc",
          id: "references/js-client/classes/SwapsResource",
          label: "swaps",
        },
      ],
    },
  ],
  entitiesSidebar: [
    {
      type: "ref",
      id: "development/overview",
      label: "Back to Medusa Development",
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: "back-arrow",
      },
    },
    {
      type: "html",
      value: "Entities Reference",
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: "folder-open",
      },
    },
    {
      type: "autogenerated",
      dirName: "references/entities/classes",
    },
  ],
}
