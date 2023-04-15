<script lang="ts">
	export let size: String | 'small' | 'normal' | 'large' = 'normal';
	export let variant: String | 'primary' | 'secondary' | 'neutral' = 'primary';
	export let invert = false;
	export let outline = false;
	export let flat = false;
	export let disabled = false;

	// Extending example
	// Dont forget to add the extended classType in
	// the button tag
	export let rounded = false;
</script>

<button
	class="{variant} {size}"
	class:invert
	class:outline
	class:flat
	class:disabled
	class:rounded
	on:click
	on:focus
	on:submit
>
	<slot />
</button>

<style lang="scss">
	button {
		/* You may move the variables
    in your global stylesheet
    for better management */
		--primary: #be0b00;
		--primary-text: #ffffff;
		--secondary: #775655;
		--secondary-text: #ffffff;
		--neutral: #f4dddc;
		--neutral-text: #524342;
		--focus-ring: #857372;

		font-weight: bold;
		text-transform: uppercase;
		outline: 0;
		border: none;
		border-radius: 6px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.199);
		transition: all 300ms ease;
		cursor: pointer;
		font-size: 0.8rem;

		/* STATES */
		&:hover,
		&:focus {
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.199);
		}
		&:focus {
			border: 1px solid var(--focus-ring);
		}

		/* SIZES */
		&.normal {
			padding: {
				block: 1rem;
				inline: 2rem;
			}
		}
		&.large {
			font-size: 1rem;
			padding: {
				block: 1.2rem;
				inline: 3rem;
			}
		}
		&.small {
			padding: {
				block: 0.8rem;
				inline: 1rem;
			}
		}

		/* COLORS */
		&.primary {
			background-color: var(--primary);
			color: var(--primary-text);
			&.invert {
				background-color: var(--primary-text);
				color: var(--primary);
			}
		}
		&.secondary {
			background-color: var(--secondary);
			color: var(--secondary-text);

			&.invert {
				background-color: var(--secondary-text);
				color: var(--secondary);
			}
		}
		&.neutral {
			background-color: var(--neutral);
			color: var(--neutral-text);

			&.invert {
				background-color: var(--neutral-text);
				color: var(--neutral);
			}
		}

		/* OUTLINE */
		&.outline {
			background-color: transparent !important;
			&.primary {
				color: var(--primary);
				border: 1px solid var(--primary);
			}
			&.secondary {
				color: var(--secondary);
				border: 1px solid var(--secondary);
			}
			&.neutral {
				color: var(--neutral-text);
				border: 1px solid var(--neutral-text);
			}
		}

		/* FLAT */
		&.flat {
			box-shadow: none !important;
		}

		/* DISABLED */
		&.disabled {
			opacity: 0.3 !important;
			pointer-events: none;
			&:hover {
				cursor: not-allowed !important;
			}
		}
		/* EXTENDEDING */
		&.rounded {
			border-radius: 32px;
		}
	}
</style>
