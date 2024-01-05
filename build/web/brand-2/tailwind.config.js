/** @type {import('tailwindcss').Config} */
 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      color: {
        brand: {
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)"
        },
        core: {
          blue: {
            1: "var(--color-core-blue-1)",
            2: "var(--color-core-blue-2)",
            3: "var(--color-core-blue-3)",
            4: "var(--color-core-blue-4)",
            5: "var(--color-core-blue-5)",
            6: "var(--color-core-blue-6)",
            7: "var(--color-core-blue-7)",
            8: "var(--color-core-blue-8)",
            9: "var(--color-core-blue-9)",
            10: "var(--color-core-blue-10)",
            11: "var(--color-core-blue-11)",
            12: "var(--color-core-blue-12)",
            13: "var(--color-core-blue-13)",
            14: "var(--color-core-blue-14)",
            15: "var(--color-core-blue-15)",
            16: "var(--color-core-blue-16)"
          },
          purple: {
            1: "var(--color-core-purple-1)",
            2: "var(--color-core-purple-2)",
            3: "var(--color-core-purple-3)",
            4: "var(--color-core-purple-4)",
            5: "var(--color-core-purple-5)",
            6: "var(--color-core-purple-6)",
            7: "var(--color-core-purple-7)",
            8: "var(--color-core-purple-8)",
            9: "var(--color-core-purple-9)",
            10: "var(--color-core-purple-10)",
            11: "var(--color-core-purple-11)",
            12: "var(--color-core-purple-12)",
            13: "var(--color-core-purple-13)",
            14: "var(--color-core-purple-14)",
            15: "var(--color-core-purple-15)",
            16: "var(--color-core-purple-16)"
          },
          pink: {
            1: "var(--color-core-pink-1)",
            2: "var(--color-core-pink-2)",
            3: "var(--color-core-pink-3)",
            4: "var(--color-core-pink-4)",
            5: "var(--color-core-pink-5)",
            6: "var(--color-core-pink-6)",
            7: "var(--color-core-pink-7)",
            8: "var(--color-core-pink-8)",
            9: "var(--color-core-pink-9)",
            10: "var(--color-core-pink-10)",
            11: "var(--color-core-pink-11)",
            12: "var(--color-core-pink-12)",
            13: "var(--color-core-pink-13)",
            14: "var(--color-core-pink-14)",
            15: "var(--color-core-pink-15)",
            16: "var(--color-core-pink-16)"
          },
          red: {
            1: "var(--color-core-red-1)",
            2: "var(--color-core-red-2)",
            3: "var(--color-core-red-3)",
            4: "var(--color-core-red-4)",
            5: "var(--color-core-red-5)",
            6: "var(--color-core-red-6)",
            7: "var(--color-core-red-7)",
            8: "var(--color-core-red-8)",
            9: "var(--color-core-red-9)",
            10: "var(--color-core-red-10)",
            11: "var(--color-core-red-11)",
            12: "var(--color-core-red-12)",
            13: "var(--color-core-red-13)",
            14: "var(--color-core-red-14)",
            15: "var(--color-core-red-15)",
            16: "var(--color-core-red-16)"
          },
          yellow: {
            1: "var(--color-core-yellow-1)",
            2: "var(--color-core-yellow-2)",
            3: "var(--color-core-yellow-3)",
            4: "var(--color-core-yellow-4)",
            5: "var(--color-core-yellow-5)",
            6: "var(--color-core-yellow-6)",
            7: "var(--color-core-yellow-7)",
            8: "var(--color-core-yellow-8)",
            9: "var(--color-core-yellow-9)",
            10: "var(--color-core-yellow-10)",
            11: "var(--color-core-yellow-11)",
            12: "var(--color-core-yellow-12)",
            13: "var(--color-core-yellow-13)",
            14: "var(--color-core-yellow-14)",
            15: "var(--color-core-yellow-15)",
            16: "var(--color-core-yellow-16)"
          },
          green: {
            1: "var(--color-core-green-1)",
            2: "var(--color-core-green-2)",
            3: "var(--color-core-green-3)",
            4: "var(--color-core-green-4)",
            5: "var(--color-core-green-5)",
            6: "var(--color-core-green-6)",
            7: "var(--color-core-green-7)",
            8: "var(--color-core-green-8)",
            9: "var(--color-core-green-9)",
            10: "var(--color-core-green-10)",
            11: "var(--color-core-green-11)",
            12: "var(--color-core-green-12)",
            13: "var(--color-core-green-13)",
            14: "var(--color-core-green-14)",
            15: "var(--color-core-green-15)",
            16: "var(--color-core-green-16)"
          },
          teal: {
            1: "var(--color-core-teal-1)",
            2: "var(--color-core-teal-2)",
            3: "var(--color-core-teal-3)",
            4: "var(--color-core-teal-4)",
            5: "var(--color-core-teal-5)",
            6: "var(--color-core-teal-6)",
            7: "var(--color-core-teal-7)",
            8: "var(--color-core-teal-8)",
            9: "var(--color-core-teal-9)",
            10: "var(--color-core-teal-10)",
            11: "var(--color-core-teal-11)",
            12: "var(--color-core-teal-12)",
            13: "var(--color-core-teal-13)",
            14: "var(--color-core-teal-14)",
            15: "var(--color-core-teal-15)",
            16: "var(--color-core-teal-16)"
          },
          gray: {
            1: "var(--color-core-gray-1)",
            2: "var(--color-core-gray-2)",
            3: "var(--color-core-gray-3)",
            4: "var(--color-core-gray-4)",
            5: "var(--color-core-gray-5)",
            6: "var(--color-core-gray-6)",
            7: "var(--color-core-gray-7)",
            8: "var(--color-core-gray-8)",
            9: "var(--color-core-gray-9)",
            10: "var(--color-core-gray-10)",
            11: "var(--color-core-gray-11)",
            12: "var(--color-core-gray-12)",
            13: "var(--color-core-gray-13)",
            14: "var(--color-core-gray-14)",
            15: "var(--color-core-gray-15)",
            16: "var(--color-core-gray-16)"
          },
          orange: {
            1: "var(--color-core-orange-1)",
            2: "var(--color-core-orange-2)",
            3: "var(--color-core-orange-3)",
            4: "var(--color-core-orange-4)",
            5: "var(--color-core-orange-5)",
            6: "var(--color-core-orange-6)",
            7: "var(--color-core-orange-7)",
            8: "var(--color-core-orange-8)",
            9: "var(--color-core-orange-9)",
            10: "var(--color-core-orange-10)",
            11: "var(--color-core-orange-11)",
            12: "var(--color-core-orange-12)",
            13: "var(--color-core-orange-13)",
            14: "var(--color-core-orange-14)",
            15: "var(--color-core-orange-15)",
            16: "var(--color-core-orange-16)"
          },
          rose: {
            1: "var(--color-core-rose-1)",
            2: "var(--color-core-rose-2)",
            3: "var(--color-core-rose-3)",
            4: "var(--color-core-rose-4)",
            5: "var(--color-core-rose-5)",
            6: "var(--color-core-rose-6)",
            7: "var(--color-core-rose-7)",
            8: "var(--color-core-rose-8)",
            9: "var(--color-core-rose-9)",
            10: "var(--color-core-rose-10)",
            11: "var(--color-core-rose-11)",
            12: "var(--color-core-rose-12)",
            13: "var(--color-core-rose-13)",
            14: "var(--color-core-rose-14)",
            15: "var(--color-core-rose-15)",
            16: "var(--color-core-rose-16)"
          },
          sunset: {
            1: "var(--color-core-sunset-1)",
            2: "var(--color-core-sunset-2)",
            3: "var(--color-core-sunset-3)",
            4: "var(--color-core-sunset-4)",
            5: "var(--color-core-sunset-5)",
            6: "var(--color-core-sunset-6)",
            7: "var(--color-core-sunset-7)",
            8: "var(--color-core-sunset-8)",
            9: "var(--color-core-sunset-9)",
            10: "var(--color-core-sunset-10)",
            11: "var(--color-core-sunset-11)",
            12: "var(--color-core-sunset-12)",
            13: "var(--color-core-sunset-13)",
            14: "var(--color-core-sunset-14)",
            15: "var(--color-core-sunset-15)",
            16: "var(--color-core-sunset-16)"
          },
          brown: {
            1: "var(--color-core-brown-1)",
            2: "var(--color-core-brown-2)",
            3: "var(--color-core-brown-3)",
            4: "var(--color-core-brown-4)",
            5: "var(--color-core-brown-5)",
            6: "var(--color-core-brown-6)",
            7: "var(--color-core-brown-7)",
            8: "var(--color-core-brown-8)",
            9: "var(--color-core-brown-9)",
            10: "var(--color-core-brown-10)",
            11: "var(--color-core-brown-11)",
            12: "var(--color-core-brown-12)",
            13: "var(--color-core-brown-13)",
            14: "var(--color-core-brown-14)",
            15: "var(--color-core-brown-15)",
            16: "var(--color-core-brown-16)"
          },
          citron: {
            1: "var(--color-core-citron-1)",
            2: "var(--color-core-citron-2)",
            3: "var(--color-core-citron-3)",
            4: "var(--color-core-citron-4)",
            5: "var(--color-core-citron-5)",
            6: "var(--color-core-citron-6)",
            7: "var(--color-core-citron-7)",
            8: "var(--color-core-citron-8)",
            9: "var(--color-core-citron-9)",
            10: "var(--color-core-citron-10)",
            11: "var(--color-core-citron-11)",
            12: "var(--color-core-citron-12)",
            13: "var(--color-core-citron-13)",
            14: "var(--color-core-citron-14)",
            15: "var(--color-core-citron-15)",
            16: "var(--color-core-citron-16)"
          },
          lime: {
            1: "var(--color-core-lime-1)",
            2: "var(--color-core-lime-2)",
            3: "var(--color-core-lime-3)",
            4: "var(--color-core-lime-4)",
            5: "var(--color-core-lime-5)",
            6: "var(--color-core-lime-6)",
            7: "var(--color-core-lime-7)",
            8: "var(--color-core-lime-8)",
            9: "var(--color-core-lime-9)",
            10: "var(--color-core-lime-10)",
            11: "var(--color-core-lime-11)",
            12: "var(--color-core-lime-12)",
            13: "var(--color-core-lime-13)",
            14: "var(--color-core-lime-14)",
            15: "var(--color-core-lime-15)",
            16: "var(--color-core-lime-16)"
          },
          mint: {
            1: "var(--color-core-mint-1)",
            2: "var(--color-core-mint-2)",
            3: "var(--color-core-mint-3)",
            4: "var(--color-core-mint-4)",
            5: "var(--color-core-mint-5)",
            6: "var(--color-core-mint-6)",
            7: "var(--color-core-mint-7)",
            8: "var(--color-core-mint-8)",
            9: "var(--color-core-mint-9)",
            10: "var(--color-core-mint-10)",
            11: "var(--color-core-mint-11)",
            12: "var(--color-core-mint-12)",
            13: "var(--color-core-mint-13)",
            14: "var(--color-core-mint-14)",
            15: "var(--color-core-mint-15)",
            16: "var(--color-core-mint-16)"
          },
          cyan: {
            1: "var(--color-core-cyan-1)",
            2: "var(--color-core-cyan-2)",
            3: "var(--color-core-cyan-3)",
            4: "var(--color-core-cyan-4)",
            5: "var(--color-core-cyan-5)",
            6: "var(--color-core-cyan-6)",
            7: "var(--color-core-cyan-7)",
            8: "var(--color-core-cyan-8)",
            9: "var(--color-core-cyan-9)",
            10: "var(--color-core-cyan-10)",
            11: "var(--color-core-cyan-11)",
            12: "var(--color-core-cyan-12)",
            13: "var(--color-core-cyan-13)",
            14: "var(--color-core-cyan-14)",
            15: "var(--color-core-cyan-15)",
            16: "var(--color-core-cyan-16)"
          },
          indigo: {
            1: "var(--color-core-indigo-1)",
            2: "var(--color-core-indigo-2)",
            3: "var(--color-core-indigo-3)",
            4: "var(--color-core-indigo-4)",
            5: "var(--color-core-indigo-5)",
            6: "var(--color-core-indigo-6)",
            7: "var(--color-core-indigo-7)",
            8: "var(--color-core-indigo-8)",
            9: "var(--color-core-indigo-9)",
            10: "var(--color-core-indigo-10)",
            11: "var(--color-core-indigo-11)",
            12: "var(--color-core-indigo-12)",
            13: "var(--color-core-indigo-13)",
            14: "var(--color-core-indigo-14)",
            15: "var(--color-core-indigo-15)",
            16: "var(--color-core-indigo-16)"
          },
          magenta: {
            1: "var(--color-core-magenta-1)",
            2: "var(--color-core-magenta-2)",
            3: "var(--color-core-magenta-3)",
            4: "var(--color-core-magenta-4)",
            5: "var(--color-core-magenta-5)",
            6: "var(--color-core-magenta-6)",
            7: "var(--color-core-magenta-7)",
            8: "var(--color-core-magenta-8)",
            9: "var(--color-core-magenta-9)",
            10: "var(--color-core-magenta-10)",
            11: "var(--color-core-magenta-11)",
            12: "var(--color-core-magenta-12)",
            13: "var(--color-core-magenta-13)",
            14: "var(--color-core-magenta-14)",
            15: "var(--color-core-magenta-15)",
            16: "var(--color-core-magenta-16)"
          },
          nude: {
            1: "var(--color-core-nude-1)",
            2: "var(--color-core-nude-2)",
            3: "var(--color-core-nude-3)",
            4: "var(--color-core-nude-4)",
            5: "var(--color-core-nude-5)",
            6: "var(--color-core-nude-6)",
            7: "var(--color-core-nude-7)",
            8: "var(--color-core-nude-8)",
            9: "var(--color-core-nude-9)",
            10: "var(--color-core-nude-10)",
            11: "var(--color-core-nude-11)",
            12: "var(--color-core-nude-12)",
            13: "var(--color-core-nude-13)",
            14: "var(--color-core-nude-14)",
            15: "var(--color-core-nude-15)",
            16: "var(--color-core-nude-16)"
          }
        },
        base: {
          black: "var(--color-base-black)",
          gray: {
            light: "var(--color-base-gray-light)",
            medium: "var(--color-base-gray-medium)",
            dark: "var(--color-base-gray-dark)"
          },
          red: "var(--color-base-red)",
          green: "var(--color-base-green)"
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        action: {
          primary: "var(--color-action-primary)",
          secondary: "var(--color-action-secondary)",
          tertiary: "var(--color-action-tertiary)"
        },
        font: {
          base: "var(--color-font-base)",
          primary: "var(--color-font-primary)",
          secondary: "var(--color-font-secondary)",
          tertiary: "var(--color-font-tertiary)"
        }
      },
      button: {
        border: {
          radius: "var(--button-border-radius)"
        },
        text: {
          size: "var(--button-text-size)"
        },
        color: {
          background: "var(--button-color-background)"
        },
        height: "var(--button-height)"
      },
      font: {
        typography: {
      "display1": {
            weight: "var(--font-typography-display1-weight)",
            textTransform: "var(--font-typography-display1-text-transform)",
            fontSize: "var(--font-typography-display1-font-size)",
            lineHeight: "var(--font-typography-display1-line-height)"
          },
      "title1": {
            weight: "var(--font-typography-title1-weight)",
            textTransform: "var(--font-typography-title1-text-transform)",
            fontSize: "var(--font-typography-title1-font-size)",
            lineHeight: "var(--font-typography-title1-line-height)"
          },
      "title2": {
            weight: "var(--font-typography-title2-weight)",
            textTransform: "var(--font-typography-title2-text-transform)",
            fontSize: "var(--font-typography-title2-font-size)",
            lineHeight: "var(--font-typography-title2-line-height)"
          },
      "title3": {
            weight: "var(--font-typography-title3-weight)",
            textTransform: "var(--font-typography-title3-text-transform)",
            fontSize: "var(--font-typography-title3-font-size)",
            lineHeight: "var(--font-typography-title3-line-height)"
          },
      "title4": {
            weight: "var(--font-typography-title4-weight)",
            textTransform: "var(--font-typography-title4-text-transform)",
            fontSize: "var(--font-typography-title4-font-size)",
            lineHeight: "var(--font-typography-title4-line-height)"
          },
      "headline1": {
            weight: "var(--font-typography-headline1-weight)",
            textTransform: "var(--font-typography-headline1-text-transform)",
            fontSize: "var(--font-typography-headline1-font-size)",
            lineHeight: "var(--font-typography-headline1-line-height)"
          },
      "body1": {
            weight: "var(--font-typography-body1-weight)",
            textTransform: "var(--font-typography-body1-text-transform)",
            fontSize: "var(--font-typography-body1-font-size)",
            lineHeight: "var(--font-typography-body1-line-height)"
          },
      "label1": {
            weight: "var(--font-typography-label1-weight)",
            textTransform: "var(--font-typography-label1-text-transform)",
            fontSize: "var(--font-typography-label1-font-size)",
            lineHeight: "var(--font-typography-label1-line-height)"
          },
      "label2": {
            weight: "var(--font-typography-label2-weight)",
            textTransform: "var(--font-typography-label2-text-transform)",
            fontSize: "var(--font-typography-label2-font-size)",
            lineHeight: "var(--font-typography-label2-line-height)"
          },
      "caption1": {
            weight: "var(--font-typography-caption1-weight)",
            textTransform: "var(--font-typography-caption1-text-transform)",
            fontSize: "var(--font-typography-caption1-font-size)",
            lineHeight: "var(--font-typography-caption1-line-height)"
          },
      "caption2": {
            weight: "var(--font-typography-caption2-weight)",
            textTransform: "var(--font-typography-caption2-text-transform)",
            fontSize: "var(--font-typography-caption2-font-size)",
            lineHeight: "var(--font-typography-caption2-line-height)"
          },
      "legal1": {
            weight: "var(--font-typography-legal1-weight)",
            textTransform: "var(--font-typography-legal1-text-transform)",
            fontSize: "var(--font-typography-legal1-font-size)",
            lineHeight: "var(--font-typography-legal1-line-height)"
          }
        },
        weight: {
          thin: "var(--font-weight-thin)",
          extralight: "var(--font-weight-extralight)",
          light: "var(--font-weight-light)",
          regular: "var(--font-weight-regular)",
          medium: "var(--font-weight-medium)",
          semibold: "var(--font-weight-semibold)",
          bold: "var(--font-weight-bold)",
          extrabold: "var(--font-weight-extrabold)",
          black: "var(--font-weight-black)"
        },
        platform: {
          system: "var(--font-platform-system)"
        }
      },
      layout: {
        aspectRatio: {
          0: "var(--layout-aspect-ratio-0)",
          1: "var(--layout-aspect-ratio-1)",
          2: "var(--layout-aspect-ratio-2)",
          3: "var(--layout-aspect-ratio-3)",
          4: "var(--layout-aspect-ratio-4)",
          5: "var(--layout-aspect-ratio-5)",
          6: "var(--layout-aspect-ratio-6)",
          7: "var(--layout-aspect-ratio-7)",
          8: "var(--layout-aspect-ratio-8)",
          9: "var(--layout-aspect-ratio-9)",
          10: "var(--layout-aspect-ratio-10)",
          11: "var(--layout-aspect-ratio-11)",
          12: "var(--layout-aspect-ratio-12)",
          13: "var(--layout-aspect-ratio-13)",
          14: "var(--layout-aspect-ratio-14)"
        },
        zIndex: {
          0: "var(--layout-z-index-0)",
          1: "var(--layout-z-index-1)",
          2: "var(--layout-z-index-2)",
          3: "var(--layout-z-index-3)",
          4: "var(--layout-z-index-4)",
          5: "var(--layout-z-index-5)",
          6: "var(--layout-z-index-6)",
          7: "var(--layout-z-index-7)",
          8: "var(--layout-z-index-8)",
          9: "var(--layout-z-index-9)",
          10: "var(--layout-z-index-10)",
          11: "var(--layout-z-index-11)",
          12: "var(--layout-z-index-12)",
          13: "var(--layout-z-index-13)",
          14: "var(--layout-z-index-14)"
        }
      },
      motion: {
        animation: {
          none: "var(--motion-animation-none)",
          spin: "var(--motion-animation-spin)",
          ping: "var(--motion-animation-ping)",
          pulse: "var(--motion-animation-pulse)",
          bounce: "var(--motion-animation-bounce)",
          accordionDown: "var(--motion-animation-accordion-down)",
          accordionUp: "var(--motion-animation-accordion-up)"
        },
        tansitionDelay: {
          0: "var(--motion-tansition-delay-0)",
          75: "var(--motion-tansition-delay-75)",
          100: "var(--motion-tansition-delay-100)",
          150: "var(--motion-tansition-delay-150)",
          200: "var(--motion-tansition-delay-200)",
          300: "var(--motion-tansition-delay-300)",
          500: "var(--motion-tansition-delay-500)",
          700: "var(--motion-tansition-delay-700)",
          1000: "var(--motion-tansition-delay-1000)"
        },
        transitionDuration: {
          0: "var(--motion-transition-duration-0)",
          75: "var(--motion-transition-duration-75)",
          100: "var(--motion-transition-duration-100)",
          150: "var(--motion-transition-duration-150)",
          200: "var(--motion-transition-duration-200)",
          300: "var(--motion-transition-duration-300)",
          500: "var(--motion-transition-duration-500)",
          700: "var(--motion-transition-duration-700)",
          1000: "var(--motion-transition-duration-1000)"
        },
        transitionTiming: {
          linear: "var(--motion-transition-timing-linear)",
          in: "var(--motion-transition-timing-in)",
          out: "var(--motion-transition-timing-out)",
          inOut: "var(--motion-transition-timing-in-out)"
        }
      },
      shapes: {
        compact: {
          square: "var(--shapes-compact-square)",
          xs: "var(--shapes-compact-xs)",
          s: "var(--shapes-compact-s)",
          m: "var(--shapes-compact-m)",
          l: "var(--shapes-compact-l)",
          xl: "var(--shapes-compact-xl)",
          xxl: "var(--shapes-compact-xxl)",
          circle: "var(--shapes-compact-circle)"
        }
      },
      size: {
        avatar: {
          compact: {
            s: "var(--size-avatar-compact-s)",
            m: "var(--size-avatar-compact-m)",
            l: "var(--size-avatar-compact-l)"
          },
          normal: {
            s: "var(--size-avatar-normal-s)",
            m: "var(--size-avatar-normal-m)",
            l: "var(--size-avatar-normal-l)"
          }
        },
        border: {
          width: {
            0: "var(--size-border-width-0)",
            1: "var(--size-border-width-1)",
            2: "var(--size-border-width-2)",
            4: "var(--size-border-width-4)",
            8: "var(--size-border-width-8)"
          },
          radius: {
            0: "var(--size-border-radius-0)",
            1: "var(--size-border-radius-1)",
            2: "var(--size-border-radius-2)",
            4: "var(--size-border-radius-4)",
            8: "var(--size-border-radius-8)"
          }
        },
        font: {
          small: "var(--size-font-small)",
          medium: "var(--size-font-medium)",
          large: "var(--size-font-large)",
          base: "var(--size-font-base)"
        },
        icon: {
          compact: {
            s: "var(--size-icon-compact-s)",
            m: "var(--size-icon-compact-m)",
            l: "var(--size-icon-compact-l)"
          },
          normal: {
            s: "var(--size-icon-normal-s)",
            m: "var(--size-icon-normal-m)",
            l: "var(--size-icon-normal-l)"
          }
        }
      },
      space: {
        normal: {
          0: "var(--space-normal-0)",
          1: "var(--space-normal-1)",
          2: "var(--space-normal-2)",
          3: "var(--space-normal-3)",
          4: "var(--space-normal-4)",
          5: "var(--space-normal-5)",
          6: "var(--space-normal-6)",
          7: "var(--space-normal-7)",
          8: "var(--space-normal-8)",
          9: "var(--space-normal-9)",
          10: "var(--space-normal-10)",
          11: "var(--space-normal-11)",
          12: "var(--space-normal-12)",
          13: "var(--space-normal-13)",
          14: "var(--space-normal-14)"
        },
        compact: {
          0: "var(--space-compact-0)",
          1: "var(--space-compact-1)",
          2: "var(--space-compact-2)",
          3: "var(--space-compact-3)",
          4: "var(--space-compact-4)",
          5: "var(--space-compact-5)",
          6: "var(--space-compact-6)",
          7: "var(--space-compact-7)",
          8: "var(--space-compact-8)",
          9: "var(--space-compact-9)",
          10: "var(--space-compact-10)",
          11: "var(--space-compact-11)",
          12: "var(--space-compact-12)",
          13: "var(--space-compact-13)",
          14: "var(--space-compact-14)"
        }
      }
    },
  },
}