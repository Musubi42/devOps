## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:lts-alpine as base

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /home/node/app

# Do the chown so that the node_modules/.cache can be updated
RUN chown -R node:node /home/node

# Copy the source code over
COPY --chown=node:node . /home/node/app/

# Install with CI, wich will install deps from package-lock.json
RUN npm ci
# Switch to the node user vs. root
USER node
# Expose port 3000
EXPOSE 4200
# Start the app in debug mode so we can attach the debugger
CMD ["npm", "run", "serve", "--", "--build", "--port", "4200", "--host", "0.0.0.0"]